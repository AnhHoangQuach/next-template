import { ArrowDropDown, BarChart, Bolt } from '@mui/icons-material';
import { Button, Chip, Container, Divider, Grid, Paper } from '@mui/material';
import { AvatarSize } from 'components/common';

const Market = () => {
  return (
    <Container maxWidth='lg' className='space-y-6'>
      <Paper variant='outlined' className='shadow-base'>
        <div className='flex justify-between px-6 py-3'>
          <div className='font-bold'>Stats overview</div>
          <div>
            <span className='mr-2 text-sm font-bold text-neutral-secondary'>Asset breadown</span>
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
            <Button size='small' className='rounded-full' color='inherit' startIcon={<Bolt />}>
              ZAP
            </Button>
          </Grid>
          <Grid item md>
            <div className='mb-1 text-sm font-bold text-neutral-secondary'>RDNT price</div>
            <div className='text-2xl font-bold'>$0.04</div>
            <Button size='small' className='rounded-full' color='inherit'>
              BUY
            </Button>
          </Grid>
          <Grid item md>
            <div className='mb-1 text-sm font-bold text-neutral-secondary'>Fees paid to lockers</div>
            <div className='text-2xl font-bold'>$8.16M</div>
            <Button size='small' className='rounded-full' color='inherit'>
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

          <Grid container component={Paper} variant='outlined' className='rounded-base p-4 shadow-sm'>
            <Grid item md>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <AvatarSize size={24} />
                  <span className='font-bold'>DAI</span>
                </div>
                <div className='text-sm'>
                  <span className='font-bold'>Deposits:</span> <span>$24,123,323.12</span>
                </div>
                <div className='text-sm'>
                  <span className='font-bold'>Borrows:</span> <span>$23,323.12</span>
                </div>
              </div>
            </Grid>
            <Grid item md>
              <div className='flex flex-col items-center'>
                <div className='mb-1 text-sm text-neutral-secondary'>1.84%</div>
                <div className='bg-gradient-to-t from-[orange] to-[cyan] p-px'>
                  <Chip
                    label='5.71% APR'
                    icon={<AvatarSize size={24} />}
                    className='rounded-none bg-background-main font-bold'
                  />
                </div>
              </div>
            </Grid>
            <Grid item md></Grid>
            <Grid item md></Grid>
          </Grid>
        </div>
      </Paper>
    </Container>
  );
};

export default Market;
