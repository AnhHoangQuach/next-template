import { ArrowDropDown, BarChart } from '@mui/icons-material';
import { Button, Container, Divider, Grid, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { TokenRow } from './components';

const Market = () => {
  const { allTokens } = useSelector(assetSelector);

  return (
    <Container className='space-y-6'>
      <Paper variant='outlined' className='shadow-md'>
        <div className='flex justify-between px-6 py-3'>
          <div className='font-bold'>Stats overview</div>
          <div className='cursor-pointer text-neutral-secondary hover:text-primary-main'>
            <span className='mr-2 text-sm font-bold'>Asset breadown</span>
            <BarChart />
          </div>
        </div>
        <Divider />
        <Grid container gap={2} className='p-6 pt-3'>
          {[
            { label: 'Total Market Size', value: '$ 3.97M' },
            { label: 'Fees Paid to Lockers', value: '$ 40.07M' },
            { label: 'RDNT Price', value: '$ 0.04' },
            { label: 'Locking APR', value: '0.00 %' },
            { label: 'Pool2 APR', value: '0.00 %' },
          ].map((item, index) => {
            return (
              <Grid item md key={index} className='space-y-1'>
                <div className='font-medium'>{item.label}</div>
                <div className={'font-bold ' + (index <= 1 ? 'text-4xl' : 'text-2xl')}>{item.value}</div>
                <div></div>
                {index === 2 && (
                  <Button variant='outlined' className='w-[120px]'>
                    Buy
                  </Button>
                )}
                {index === 3 && (
                  <Button variant='outlined' className='w-[120px]'>
                    Lock
                  </Button>
                )}
                {index === 4 && (
                  <Button variant='outlined' className='w-[120px]'>
                    Stake
                  </Button>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Paper>

      <Paper variant='outlined' className='shadow-md'>
        <div className='flex justify-between px-6 py-3'>
          <div className='font-bold'>Arbitrum assets</div>
        </div>
        <Divider />
        <div className='space-y-3 p-6'>
          <Grid container>
            {[{ label: 'Assets' }, { label: 'Deposit APY' }, { label: 'Borrow APY' }, { label: 'Loop APR' }].map(
              (item, index) => (
                <Grid key={index} item md className='flex justify-center text-neutral-secondary'>
                  <div className='cursor-pointer pl-3 hover:text-neutral-primary'>
                    <span className='text-sm font-bold'>{item.label}</span>
                    <ArrowDropDown />
                  </div>
                </Grid>
              ),
            )}
          </Grid>

          {allTokens.map((token) => (
            <TokenRow key={token.address} token={token} />
          ))}
        </div>
      </Paper>
    </Container>
  );
};

export default Market;
