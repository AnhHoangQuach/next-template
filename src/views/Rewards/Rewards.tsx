import { AddCircle } from '@mui/icons-material';
import { Avatar, AvatarGroup, Button, Container, Dialog, FormControl, MenuItem, Paper, Select } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { RewardsImage } from 'assets/images';
import { NextImage } from 'components/next';
import { useMemo, useState } from 'react';
import { Api } from 'services';
import { formatNumber } from 'utils/common';
import { BASE_TOKEN_SYMBOL } from 'utils/constants';
import { useAccount } from 'wagmi';
import { PopupClaimReward } from './components';

const Rewards = () => {
  const { address } = useAccount();
  const [openClaim, setOpenClaim] = useState(false);
  const [chosenRows, setChosenRows] = useState<RewardType[]>([]);

  const [tokenId, setTokenId] = useState<number>();

  const { data: vests } = useQuery(
    ['Api.fetchAddressVest', address],
    () => Api.fetchAddressVest({ address: address! }).then((vests) => vests.sort((a, b) => a.tokenId - b.tokenId)),
    {
      enabled: !!address,
      onSuccess: (vests) => {
        setTokenId(vests[0]?.tokenId);
      },
    },
  );

  const { data: rewards = [], isFetching } = useQuery(
    ['Api.fetchAddressReward', address, tokenId],
    () =>
      Api.fetchAddressReward({ address: address!, tokenId: tokenId! }).then((rewards) =>
        rewards.map((reward) => {
          const key = `${reward.type}-${reward.name}-${reward.token0Reward.symbol}`;
          if (reward.token0Reward) reward.token0Reward.optionalValue = reward.reward0;
          if (reward.token1Reward) reward.token1Reward.optionalValue = reward.reward1;
          if (reward.token0InPool) reward.token0InPool.optionalValue = reward.token0AmountInPool;
          if (reward.token1InPool) reward.token1InPool.optionalValue = reward.token1AmountInPool;
          return { ...reward, key };
        }),
      ),
    { enabled: !!address && !!tokenId },
  );

  const groupedTableRewards = useMemo(() => {
    const groupedRewards = rewards.reduce((group, reward) => {
      const key = `${reward.type}-${reward.name}`;
      const rewards = [reward.token0Reward].concat(reward.token1Reward ?? []);
      if (group[key]) {
        group[key].optionalTokensReward = group[key].optionalTokensReward?.concat(rewards);
      } else {
        group[key] = reward;
        group[key].optionalTokensReward = rewards;
      }
      return group;
    }, {} as Record<string, RewardType>);
    return groupedRewards;
  }, [rewards]);

  return (
    <Container className='space-y-10 py-10'>
      <Paper className='flex h-[240px] items-center justify-between bg-transparent p-6'>
        <div>
          <h1 className='mb-3 text-4xl font-bold'>Rewards</h1>
          <div className='font-medium text-neutral-secondary'>
            Claim rewards for locking tokens, including new token emissions, bribes, and a slice of the transaction fees
            from your pools
          </div>
        </div>
        <NextImage src={RewardsImage} alt='Rewards' height={240} />
      </Paper>

      <div className='flex items-end justify-between gap-6'>
        <FormControl className='flex max-w-[940px] flex-1 flex-row items-center justify-between gap-6 rounded-base bg-paper-main pl-6'>
          <label>Please select your ve{BASE_TOKEN_SYMBOL}</label>
          <Select
            size='medium'
            variant='outlined'
            className='max-w-[600px] flex-1'
            value={tokenId ?? ''}
            onChange={(event) => setTokenId(+event.target.value)}
          >
            {vests?.map((item) => (
              <MenuItem key={item.id} value={item.tokenId}>
                {`Token #${item.tokenId} - ${formatNumber(item.vestAmount)} ve${BASE_TOKEN_SYMBOL}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          startIcon={<AddCircle />}
          className='px-10'
          onClick={() => {
            setChosenRows(Object.values(rewards));
            setOpenClaim(true);
          }}
        >
          Claim All
        </Button>
      </div>

      <Paper className='p-6'>
        <div className='mb-1 font-bold'>
          Rewards displayed are an estimation of the trading fees, voting rewards and rebases that you can claim.
        </div>
        <div>
          For details refer to our{' '}
          <a href='https://auragi.gitbook.io/auriga-finance/protocol/rewards' target='_blank' className='colored-link'>
            docs
          </a>
          {'.'}
        </div>
      </Paper>

      <Paper elevation={0}>
        <DataGrid
          loading={isFetching}
          getRowId={(row) => row.key}
          rows={Object.values(groupedTableRewards)}
          initialState={{
            sorting: {
              sortModel: [{ field: 'position', sort: 'desc' }],
            },
          }}
          columns={[
            {
              field: 'name',
              headerName: 'Pool',
              flex: 1,
              minWidth: 280,
              renderCell: ({ row }) => (
                <div className='flex items-center gap-1'>
                  {row.type === 'RebaseAmount' ? (
                    <>
                      <Avatar />
                      <div>ve{BASE_TOKEN_SYMBOL}</div>
                    </>
                  ) : (
                    <>
                      <AvatarGroup>
                        <Avatar src={row.token0InPool.logoURI} />
                        <Avatar src={row.token1InPool.logoURI} />
                      </AvatarGroup>
                      <div>
                        <div className='font-medium text-neutral-secondary'>{row.name}</div>
                        <div className='font-bold'>{row.type}</div>
                      </div>
                    </>
                  )}
                </div>
              ),
            },
            {
              field: 'position',
              headerName: 'Your Position',
              flex: 1,
              minWidth: 200,
              valueGetter: ({ row }) => row.token0InPool.optionalValue,
              renderCell: ({ row }) => (
                <div>
                  <div>
                    <span className='font-bold'>{formatNumber(row.token0InPool.optionalValue)}</span>{' '}
                    <span className='text-sm font-medium text-neutral-secondary'>{row.token0InPool.symbol}</span>
                  </div>
                  <div>
                    <span className='font-bold'>{formatNumber(row.token1InPool.optionalValue)}</span>{' '}
                    <span className='text-sm font-medium text-neutral-secondary'>{row.token1InPool.symbol}</span>
                  </div>
                </div>
              ),
            },
            {
              field: 'reward',
              headerName: 'You Earned',
              flex: 1,
              minWidth: 200,
              sortable: false,
              renderCell: ({ row }) => (
                <div>
                  {row.optionalTokensReward?.map((item) => (
                    <div key={item.symbol} className='flex items-center gap-1'>
                      <Avatar src={item.logoURI} sx={{ width: 32, height: 32 }} />
                      <span className='font-bold'>{formatNumber(item.optionalValue, true)}</span>{' '}
                      <span className='text-sm font-medium text-neutral-secondary'>{item.symbol}</span>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              field: 'actions',
              headerName: '',
              cellClassName: 'Pinned -right',
              minWidth: 120,
              sortable: false,
              renderCell: ({ row }) => (
                <Button
                  fullWidth
                  size='medium'
                  variant='outlined'
                  onClick={() => {
                    setOpenClaim(true);
                    setChosenRows([row]);
                  }}
                >
                  Claim
                </Button>
              ),
            },
          ]}
        />
      </Paper>

      <Dialog open={openClaim}>
        <PopupClaimReward tokenId={tokenId!} rewards={chosenRows} onClose={() => setOpenClaim(false)} />
      </Dialog>
    </Container>
  );
};

export default Rewards;
