import { Container, Grid, MenuItem, Paper, TextField } from '@mui/material';
import { AvatarSize } from 'components/common';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { publicRoute } from 'routes';

const AssetsView = () => {
  const router = useRouter();
  const { address } = router.query;

  const { allTokens } = useSelector(assetSelector);
  const [token, setToken] = useState(allTokens.find((item) => item.address === address) ?? allTokens[0]);

  return (
    <Container className='py-10'>
      <Grid container gap={2} component={Paper} variant='outlined'>
        <Grid item md={3.5} className='flex items-center py-6'>
          <TextField
            select
            fullWidth
            value={token.address}
            onChange={({ target: { value } }) => {
              setToken(allTokens.find((item) => item.address === value)!);
              router.replace(publicRoute.assetsView.url(value as Address), undefined, { shallow: true });
            }}
            size='small'
            color='secondary'
            sx={{
              '&:hover': {
                backgroundColor: 'var(--color-paper-dark)',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: 0,
                borderWidth: '0px !important',
                borderLeftWidth: '4px !important',
                borderColor: 'var(--color-secondary-main)',
              },
            }}
            SelectProps={{
              renderValue: () => (
                <div className='flex items-center gap-3'>
                  <AvatarSize sizes='large' src={token.logoURI} />
                  <div>
                    <div className='text-sm font-medium text-neutral-secondary'> {token.symbol}</div>
                    <div className='text-xl font-bold'>{token.name}</div>
                  </div>
                </div>
              ),
            }}
          >
            {allTokens.map((item) => (
              <MenuItem key={item.address} value={item.address} className='flex gap-6'>
                <AvatarSize sizes='small' src={item.logoURI} />
                <div className='w-[80px] font-medium'>{item.symbol}</div>
                <div className='font-medium text-neutral-secondary'>{item.name}</div>
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md className='py-6'>
          <Grid container gap={2}>
            {[
              { label: 'Asset price', value: '$1.00' },
              { label: 'Borrow APY', value: '11.26%' },
              { label: 'Reserve size', value: '23.73M' },
              { label: 'Available liquidity', value: '8.48M' },
              { label: 'Utillzation rate', value: '64.27%' },
            ].map((item, index) => (
              <Grid item md key={index} className='space-y-1'>
                <div className='font-medium'>{item.label}</div>
                <div className='text-2xl font-bold'>{item.value}</div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AssetsView;
