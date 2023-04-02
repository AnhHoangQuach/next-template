import { AddCircle } from '@mui/icons-material';
import { Button, Container, FormControl, MenuItem, Paper, Select, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { RewardsImage } from 'assets/images';
import { NextImage } from 'components/next';
import { useState } from 'react';
import { Api } from 'services';
import { formatNumber } from 'utils/common';
import { BASE_TOKEN_SYMBOL } from 'utils/constants';
import { useAccount } from 'wagmi';
import { RewardTable } from './components';

const Rewards = () => {
  const { address } = useAccount();

  const [tokenId, setTokenId] = useState<number>();

  const { data: vests } = useQuery(['Api.fetchAddressVest'], () => Api.fetchAddressVest({ address: address! }), {
    enabled: !!address,
  });

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
        <Button startIcon={<AddCircle />} className='px-10'>
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

      <RewardTable tokenId={tokenId} />
    </Container>
  );
};

export default Rewards;
