import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { prepareWriteContract, writeContract } from '@wagmi/core';
import { DialogClose } from 'components';
import { Abi } from 'contracts';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { contractSelector } from 'reducers/contractSlice';
import { BASE_TOKEN_SYMBOL } from 'utils/constants';
import { useAccount } from 'wagmi';
import { StepClaimReward } from '.';

type Props = PopupController & {
  tokenId: number;
  rewards: RewardType[];
};

const PopupClaimReward = ({ tokenId, rewards, onClose }: Props) => {
  const isMany = rewards.length > 1;
  const { AGI, RewardsDistributor, Voter, GaugeFactory } = useSelector(contractSelector);
  const { address } = useAccount();

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
    return groupedRewards;
  }, [rewards]);

  const { mutate: claimBribes } = useMutation(async ({ rewards }: { rewards: RewardType[] }) => {
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

  const { mutate: claimFees } = useMutation(async ({ rewards }: { rewards: RewardType[] }) => {
    const config = await prepareWriteContract({
      address: Voter,
      abi: Abi.Voter,
      functionName: 'claimFees',
      args: [
        rewards.map((reward) => reward.internalBribeAddress),
        rewards.map((reward) => reward.optionalTokensReward?.map((item) => item.address)),
      ],
    });
    return (await writeContract(config)).wait();
  });

  const { mutate: claimRebase } = useMutation(async () => {
    const config = await prepareWriteContract({
      address: RewardsDistributor,
      abi: Abi.RewardsDistributor,
      functionName: 'claim',
      args: [tokenId],
    });
    return (await writeContract(config)).wait();
  });

  const { mutate: claimReward } = useMutation(async () => {
    const config = await prepareWriteContract({
      address: GaugeFactory,
      abi: Abi.GaugeFactory,
      functionName: 'getReward',
      args: [address, [AGI]],
    });
    return (await writeContract(config)).wait();
  });

  const { mutate: claimLiquidity } = useMutation(async ({ reward }: { reward: RewardType }) => {
    const config = await prepareWriteContract({
      address: reward.pairAddress,
      abi: Abi.PairFactory,
      functionName: 'claimFees',
      args: [],
    });
    return (await writeContract(config)).wait();
  });

  const getDescription = (reward: RewardType, isMany: boolean) => {
    switch (reward.type) {
      case 'BribeReward': {
        return isMany ? 'Claim all your available bribes' : `Claim bribe reward for ${reward.name}`;
      }
      case 'FeeReward': {
        return isMany ? 'Claim all your available fees' : `Claim fee reward for ${reward.name}`;
      }
      case 'RebaseAmount': {
        return `Claim rebase for ve${BASE_TOKEN_SYMBOL}`;
      }
      case 'EmissionReward': {
        return `Claim emission reward for ${reward.name}`;
      }
      case 'LiquidityReward': {
        return `Claim liquidity reward for ${reward.name}`;
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
              <StepClaimReward
                key={type}
                status='ERROR'
                action={type}
                description={getDescription(rewards[0], isMany)}
              />
            );
          } else {
            return rewards.map((reward) => (
              <StepClaimReward key={reward.key} action={reward.type} description={getDescription(reward, isMany)} />
            ));
          }
        })}
      </DialogContent>
      <DialogActions></DialogActions>
    </>
  );
};

export default PopupClaimReward;
