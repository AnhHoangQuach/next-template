import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { prepareWriteContract, writeContract } from '@wagmi/core';
import { DialogClose, DialogStep } from 'components';
import { Abi } from 'contracts';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { contractSelector } from 'reducers/contractSlice';
import { queryClient } from 'services';
import { BASE_TOKEN_SYMBOL } from 'utils/constants';
import { useAccount } from 'wagmi';

type Props = PopupController & {
  tokenId: number;
  rewards: RewardType[];
};

const PopupClaimReward = ({ tokenId, rewards, onClose }: Props) => {
  const { AGI, RewardsDistributor, Voter } = useSelector(contractSelector);
  const { address } = useAccount();

  const [stepStatus, setStepStatus] = useState<Record<string, PopupStepInfo>>({});
  const [currentStep, setCurrentStep] = useState<[RewardFixedType, string]>(['BribeReward', '']);

  const isMany = rewards.length > 1;
  const currentKey = useRef('');

  const groupedClaimRewards = useMemo(() => {
    const groupedRewards = rewards.reduce(
      (group: Record<RewardFixedType, RewardType[]>, reward) => {
        if (group[reward.type]) {
          group[reward.type].push(reward);
        } else {
          group[reward.type] = [reward];
        }
        return group;
      },
      { BribeReward: [], FeeReward: [], RebaseAmount: [], EmissionReward: [], LiquidityReward: [] },
    );

    for (const type of Object.keys(groupedRewards) as RewardFixedType[]) {
      const rewards = groupedRewards[type];
      if (rewards.length > 0) {
        setCurrentStep([type, rewards[0].key]);
        break;
      }
    }
    return groupedRewards;
  }, [rewards]);

  useEffect(() => {
    const [type, key] = currentStep;
    if (key === '' || key === currentKey.current) return;
    currentKey.current = key;

    setStepStatus((map) => ({ ...map, [key]: { status: 'LOADING' } }));
    const rewards = groupedClaimRewards[type];
    switchRewardType(rewards)
      .writeContract({ rewards })
      .then((data: TransactionReceipt) => {
        setStepStatus((map) => ({ ...map, [key]: { status: 'SUCCESS', transactionHash: data.transactionHash } }));
        const types = Object.keys(groupedClaimRewards) as RewardFixedType[];
        let isDone = true;
        for (let i = types.indexOf(type) + 1; i < types.length; i++) {
          const nextType = types[i];
          const nextRewards = groupedClaimRewards[nextType];
          if (nextRewards.length > 0) {
            setCurrentStep([nextType, nextRewards[0].key]);
            isDone = false;
            break;
          }
        }
        if (isDone) {
          enqueueSnackbar(isMany ? 'Claim all rewards successfully' : 'Claim reward successfully');
        }
      })
      .catch(() => {
        setStepStatus((map) => ({ ...map, [key]: { status: 'ERROR' } }));
      })
      .finally(() => {
        queryClient.invalidateQueries(['Api.fetchAddressReward']);
      });
  }, [currentStep, groupedClaimRewards]);

  const handleTryAgain = (reward: RewardType) => {
    setCurrentStep([reward.type, reward.key]);
    currentKey.current = '';
  };

  const { mutateAsync: claimBribes } = useMutation(async ({ rewards }: { rewards: RewardType[] }) => {
    const config = await prepareWriteContract({
      address: Voter,
      abi: Abi.Voter,
      functionName: 'claimBribes',
      args: [
        rewards.map((reward) => reward.wrappedExternalBribe),
        rewards.map((reward) => reward.optionalTokensReward?.map((item) => item.address)),
        tokenId,
      ],
    });
    return (await writeContract(config)).wait();
  });

  const { mutateAsync: claimFees } = useMutation(async ({ rewards }: { rewards: RewardType[] }) => {
    const config = await prepareWriteContract({
      address: Voter,
      abi: Abi.Voter,
      functionName: 'claimFees',
      args: [
        rewards.map((reward) => reward.internalBribeAddress),
        rewards.map((reward) => reward.optionalTokensReward?.map((item) => item.address)),
        tokenId,
      ],
    });
    return (await writeContract(config)).wait();
  });

  const { mutateAsync: claimRebase } = useMutation(async ({ rewards }: { rewards: RewardType[] }) => {
    const config = await prepareWriteContract({
      address: RewardsDistributor,
      abi: Abi.RewardsDistributor,
      functionName: 'claim',
      args: [tokenId],
    });
    return (await writeContract(config)).wait();
  });

  const { mutateAsync: claimReward } = useMutation(async ({ rewards }: { rewards: RewardType[] }) => {
    const config = await prepareWriteContract({
      address: rewards[0].gaugeAddress,
      abi: Abi.GaugeFactory,
      functionName: 'getReward',
      args: [address, [AGI]],
    });
    return (await writeContract(config)).wait();
  });

  const { mutateAsync: claimLiquidity } = useMutation(async ({ rewards }: { rewards: RewardType[] }) => {
    const config = await prepareWriteContract({
      address: rewards[0].pairAddress,
      abi: Abi.PairFactory,
      functionName: 'claimFees',
      args: [],
    });
    return (await writeContract(config)).wait();
  });

  const switchRewardType = (rewards: RewardType[]) => {
    const reward = rewards[0];
    switch (reward.type) {
      case 'BribeReward': {
        return {
          description: isMany ? 'Claim all your available bribes' : `Claim bribe reward for ${reward.name}`,
          writeContract: claimBribes,
        };
      }
      case 'FeeReward': {
        return {
          description: isMany ? 'Claim all your available fees' : `Claim fee reward for ${reward.name}`,
          writeContract: claimFees,
        };
      }
      case 'RebaseAmount': {
        return {
          description: `Claim rebase for ve${BASE_TOKEN_SYMBOL}`,
          writeContract: claimRebase,
        };
      }
      case 'EmissionReward': {
        return {
          description: `Claim emission reward for ${reward.name}`,
          writeContract: claimReward,
        };
      }
      case 'LiquidityReward': {
        return {
          description: `Claim liquidity reward for ${reward.name}`,
          writeContract: claimLiquidity,
        };
      }
    }
  };

  return (
    <>
      <DialogClose onClick={onClose} />
      <DialogTitle>{isMany ? 'Claim Rewards' : 'Claim Reward'}</DialogTitle>
      <DialogContent>
        {Object.entries(groupedClaimRewards).map(([type, rewards]: [RewardFixedType, RewardType[]]) => {
          if (rewards.length === 0) return null;
          if (type === 'BribeReward' || type === 'FeeReward') {
            return (
              <DialogStep
                key={rewards[0].key}
                info={stepStatus[rewards[0].key]}
                action={type}
                description={switchRewardType(rewards).description}
                onTryAgain={() => handleTryAgain(rewards[0])}
              />
            );
          } else {
            return rewards.map((reward) => (
              <DialogStep
                key={reward.key}
                info={stepStatus[reward.key]}
                action={reward.type}
                description={switchRewardType(rewards).description}
                onTryAgain={() => handleTryAgain(reward)}
              />
            ));
          }
        })}
      </DialogContent>
      <DialogActions></DialogActions>
    </>
  );
};

export default PopupClaimReward;
