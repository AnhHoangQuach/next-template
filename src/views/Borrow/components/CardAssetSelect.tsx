import { Grid, MenuItem, Paper, TextField } from '@mui/material';
import { AvatarSize } from 'components/common';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { publicRoute } from 'routes';

type Props = {
  token: TokenType;
};

const CardAssetSelect = ({ token }: Props) => {
  const router = useRouter();
  const { allTokens } = useSelector(assetSelector);

  return (
    <Grid container gap={2} component={Paper}>
      <Grid item md={3.5} className='flex items-center py-6'>
        <TextField
          select
          fullWidth
          value={token.address}
          onChange={({ target: { value } }) => {
            router.replace(publicRoute.borrowAsset.url({ address: value } as TokenType), undefined, { shallow: true });
          }}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: 0,
              borderWidth: '0px !important',
              borderLeftWidth: '4px !important',
              borderColor: 'var(--color-secondary-main) !important',
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
            { label: 'Asset Price', value: '$1.00' },
            { label: 'Borrow APY', value: '11.26%' },
            { label: 'Reserve Size', value: '23.73M' },
            { label: 'Available Liquidity', value: '8.48M' },
            { label: 'Utillzation Rate', value: '64.27%' },
          ].map((item, index) => {
            const isAPY = index === 1;
            return (
              <Grid item md key={index} className='space-y-1'>
                <div className='font-medium'>{item.label}</div>
                <div className={'text-2xl font-bold ' + (isAPY ? 'text-secondary-main' : '')}>{item.value}</div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardAssetSelect;
