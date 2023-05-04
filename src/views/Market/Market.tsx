import { ArrowDropDown, BarChart, Bolt } from '@mui/icons-material';
import { Button, Container, Divider, Grid, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { TokenRow } from './components';

const Market = () => {
  const { allTokens } = useSelector(assetSelector);

  return (
    <Container className='space-y-6'>
      <Paper variant='outlined' className='shadow-base'>
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
            { label: 'Total market size', value: '$392.97M' },
            { label: 'Total dLP value looked', value: '$40.07M' },
            { label: 'RDNT price', value: '$0.04' },
            { label: 'Fees paid to lockers', value: '$8.16M' },
          ].map((item, index) => {
            return (
              <Grid item md key={index}>
                <div className='mb-1 text-sm font-bold text-neutral-secondary'>{item.label}</div>
                <div className='text-2xl font-bold'>{item.value}</div>
                {index === 1 && (
                  <Button size='small' className='mt-2 rounded-full px-4' color='inherit' startIcon={<Bolt />}>
                    ZAP
                  </Button>
                )}
                {index === 2 && (
                  <Button size='small' className='mt-2 rounded-full px-4' color='inherit'>
                    BUY
                  </Button>
                )}
                {index === 3 && (
                  <Button size='small' className='mt-2 rounded-full px-4' color='inherit'>
                    START EARNING
                  </Button>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Paper>

      <Paper variant='outlined' className='shadow-base'>
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
