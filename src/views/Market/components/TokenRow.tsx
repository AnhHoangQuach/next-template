import { Chip, Grid, Paper } from '@mui/material';
import { AvatarSize } from 'components/common';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';

type Props = {
  token: TokenType;
};

const TokenRow = ({ token }: Props) => {
  const { AGI } = useSelector(assetSelector);

  return (
    <Grid
      container
      component={Paper}
      variant='outlined'
      className='cursor-pointer items-center px-4 py-3 shadow-sm hover:shadow-md hover:shadow-primary-main'
      onClick={console.log}
    >
      <Grid item md>
        <div className='flex items-center gap-2'>
          <AvatarSize size={40} src={token.logoURI} />
          <span className='text-xl font-bold'>{token.symbol}</span>
        </div>
      </Grid>
      <Grid item md className='text-center'>
        <div className='font-medium text-neutral-secondary'>$24,123,323.12</div>
      </Grid>
      <Grid item md className='text-center'>
        <div className='font-medium text-neutral-secondary'>$24,123,323.12</div>
      </Grid>
      <Grid item md className='flex justify-center'>
        <div className='rounded-full bg-gradient-to-t from-[orange] to-[cyan] p-[1px]'>
          <Chip
            label='5.71% APR'
            icon={<AvatarSize size={24} src={AGI.logoURI} />}
            className='bg-paper-main font-bold'
          />
        </div>
      </Grid>
      <Grid item md className='flex justify-center'>
        <div className='rounded-full bg-gradient-to-t from-[orange] to-[cyan] p-[1px]'>
          <Chip
            label='5.71% APR'
            icon={<AvatarSize size={24} src={AGI.logoURI} />}
            className='bg-paper-main font-bold'
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default TokenRow;
