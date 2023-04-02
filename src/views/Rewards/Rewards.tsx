import { AddCircle } from '@mui/icons-material';
import {
  Avatar,
  AvatarGroup,
  Button,
  Container,
  Dialog,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { RewardsImage } from 'assets/images';
import { NextImage } from 'components/next';
import { useState } from 'react';
import { Api } from 'services';
import { formatNumber } from 'utils/common';
import { BASE_TOKEN_SYMBOL } from 'utils/constants';
import { useAccount } from 'wagmi';
import { PopupClaimReward } from './components';

const Rewards = () => {
  const { address } = useAccount();
  const [openClaim, setOpenClaim] = useState(false);
  const [chosenRows, setChosenRows] = useState<RewardType[]>([]);

  const [tokenId, setTokenId] = useState<number>(28 /* TODO */);

  const { data: vests } = useQuery(
    ['Api.fetchAddressVest', address],
    () => Api.fetchAddressVest({ address: address! }),
    { enabled: !!address },
  );

  const { data: rewards = [], isFetching } = useQuery(
    ['Api.fetchAddressReward', address, tokenId],
    () => Api.fetchAddressReward({ address: address!, tokenId: tokenId! }),
    { enabled: !!address && !!tokenId },
  );

  return (
    <Container className='space-y-10 py-10'>
      <Paper className='flex h-[240px] items-center justify-between bg-transparent p-6'>
        <div>
          <Typography variant='h3' component='h1' gutterBottom>
            Rewards
          </Typography>
          <Typography variant='h6' color='textSecondary' className='font-normal'>
            Claim rewards for locking tokens, including new token emissions, bribes, and a slice of the transaction fees
            from your pools
          </Typography>
        </div>
        <NextImage src={RewardsImage} alt='Rewards' height={240} />
      </Paper>

      <div className='flex items-end justify-between gap-6'>
        <FormControl className='flex max-w-[940px] flex-1 flex-row items-center justify-between gap-6 rounded-base bg-white pl-6'>
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
            setChosenRows(rewards);
            setOpenClaim(true);
          }}
        >
          Claim All
        </Button>
      </div>

      <Paper className='p-6'>
        <div className='mb-1 font-medium'>
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

      <Paper className='shadow-none'>
        <DataGrid
          loading={isFetching}
          getRowId={(row) => `${row.type}-${row.name}-${row.token0Reward.symbol}`}
          rows={rewards}
          initialState={{
            sorting: {
              sortModel: [{ field: 'name', sort: null }],
            },
          }}
          columns={[
            {
              field: 'name',
              headerName: 'Pool',
              flex: 1,
              minWidth: 280,
              sortable: false,
              renderCell: ({ row }) => (
                <div className='flex items-center gap-1'>
                  <AvatarGroup>
                    <Avatar src={row.token0InPool.logoURI} />
                    <Avatar src={row.token1InPool.logoURI} />
                  </AvatarGroup>
                  <div>
                    <div>{row.name}</div>
                    <div>{row.type}</div>
                  </div>
                </div>
              ),
            },
            {
              field: 'position',
              headerName: 'Your Position',
              flex: 1,
              minWidth: 200,
              valueGetter: ({ row }) => row.token0AmountInPool,
              renderCell: ({ row }) => (
                <div>
                  <div>
                    <span className='font-medium'>{formatNumber(row.token0AmountInPool)}</span>{' '}
                    <span className='text-neutral-secondary'>{row.token0InPool.symbol}</span>
                  </div>
                  <div>
                    <span className='font-medium'>{formatNumber(row.token1AmountInPool)}</span>{' '}
                    <span className='text-neutral-secondary'>{row.token1InPool.symbol}</span>
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
                  <div className='flex items-center gap-1'>
                    <Avatar src={row.token0Reward.logoURI} sx={{ width: 32, height: 32 }} />
                    <span className='font-medium'>{formatNumber(row.reward0, true)}</span>{' '}
                    <span className='text-neutral-secondary'>{row.token0Reward.symbol}</span>
                  </div>
                  {row.token1Reward && (
                    <div className='flex items-center gap-1'>
                      <Avatar src={row.token1Reward.logoURI} sx={{ width: 32, height: 32 }} />
                      <span className='font-medium'>{formatNumber(row.reward1, true)}</span>{' '}
                      <span className='text-neutral-secondary'>{row.token1Reward.symbol}</span>
                    </div>
                  )}
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
        <PopupClaimReward rewards={chosenRows} onClose={() => setOpenClaim(false)} />
      </Dialog>
    </Container>
  );
};

export default Rewards;
