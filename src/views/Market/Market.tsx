import { ArrowDropDown, BarChart, Bolt } from '@mui/icons-material';
import { Button, Container, Divider, Grid, Paper } from '@mui/material';
import { TokenRow } from './components';

const Market = () => {
  return (
    <Container maxWidth='lg' className='space-y-6'>
      <Paper variant='outlined' className='shadow-base'>
        <div className='flex justify-between px-6 py-3'>
          <div className='font-bold'>Stats overview</div>
          <div className='cursor-pointer text-neutral-secondary hover:text-primary-main'>
            <span className='mr-2 text-sm font-bold'>Asset breadown</span>
            <BarChart />
          </div>
        </div>
        <Divider />
        <Grid container gap={6} className='p-6 pt-3'>
          <Grid item md>
            <div className='mb-1 text-sm font-bold text-neutral-secondary'>Total market size</div>
            <div className='text-2xl font-bold'>$392.97M</div>
          </Grid>
          <Grid item md>
            <div className='mb-1 text-sm font-bold text-neutral-secondary'>Total dLP value looked</div>
            <div className='text-2xl font-bold'>$40.07M</div>
            <Button size='small' className='mt-2 rounded-full px-4' color='inherit' startIcon={<Bolt />}>
              ZAP
            </Button>
          </Grid>
          <Grid item md>
            <div className='mb-1 text-sm font-bold text-neutral-secondary'>RDNT price</div>
            <div className='text-2xl font-bold'>$0.04</div>
            <Button size='small' className='mt-2 rounded-full px-4' color='inherit'>
              BUY
            </Button>
          </Grid>
          <Grid item md>
            <div className='mb-1 text-sm font-bold text-neutral-secondary'>Fees paid to lockers</div>
            <div className='text-2xl font-bold'>$8.16M</div>
            <Button size='small' className='mt-2 rounded-full px-4' color='inherit'>
              START EARNING
            </Button>
          </Grid>
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

          {Array.from({ length: 3 }).map((item, index) => (
            <TokenRow key={index} />
          ))}
        </div>
      </Paper>
    </Container>
  );
};

export default Market;
