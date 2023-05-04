import { ArrowDropDown } from '@mui/icons-material';
import { Button, Container, Grid, Paper } from '@mui/material';
import { AvatarSize } from 'components/common';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';

const Dashboard = () => {
  const { allTokens } = useSelector(assetSelector);

  return (
    <>
      <Container className='space-y-10'>
        <h1 className='-mb-7 text-2xl font-bold'>Lending Dashboard</h1>
        <Grid
          container
          component={Paper}
          className='py-6'
          sx={{
            '& .MuiGrid-item:not(:first-child)': {
              borderLeft: '1px solid var(--color-border-main)',
            },
          }}
        >
          <Grid item md={3} className='space-y-1 px-6'>
            <div className='font-bold'>Deposits</div>
            <div className='text-4xl font-bold'>$ 0.01</div>
            <div className='flex justify-center p-3'>
              <AvatarSize size={140} />
            </div>
          </Grid>
          <Grid item md={3} className='space-y-1 px-6'>
            <div className='font-bold'>Borrows</div>
            <div className='text-4xl font-bold text-brown'>$ 0.01</div>
            <div className='flex justify-center p-3'>
              <AvatarSize size={140} />
            </div>
          </Grid>
          <Grid item md={3} className='flex flex-col space-y-1 px-6'>
            <div className='font-bold'>Health Factor</div>
            <div className='text-4xl font-bold text-green'>100.73</div>
            <div>
              <div className='flex justify-between'>
                <span>Borrowing Power Used:</span>
                <span className='text-sm font-bold'>1.05%</span>
              </div>
              <div className='flex justify-between'>
                <span>Current LTV:</span>
                <span className='text-sm font-bold'>0.05%</span>
              </div>
            </div>
            <div className='flex flex-1 items-end'>
              <Button fullWidth variant='outlined' color='inherit'>
                Details
              </Button>
            </div>
          </Grid>
          <Grid item md={3} className='flex flex-col space-y-1 px-6'>
            <div className='font-bold'>RDNT Rewards</div>
            <div className='flex items-center gap-2'>
              <AvatarSize size={32} />
              <span className='text-4xl font-bold'>100.73</span>
            </div>
            <div className='text-xl font-bold text-neutral-secondary'>$100.32</div>
            <div className='flex flex-1 items-end'>
              <Button fullWidth variant='outlined' color='inherit'>
                Start Vesting
              </Button>
            </div>
          </Grid>
        </Grid>

        <Grid container columnSpacing={5}>
          <Grid item md={6}>
            <Grid container className='mb-2'>
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

            <div className='space-y-3'>
              {allTokens.map((item) => (
                <Grid container component={Paper} className='items-center py-3 shadow-sm' key={item.address}>
                  <Grid item md>
                    <div className='flex items-center gap-2 border-l-2 border-secondary-main px-3'>
                      <AvatarSize size={24} src={item.logoURI} />
                      <span className='font-bold'>{item.symbol}</span>
                    </div>
                  </Grid>
                  <Grid item md className='text-center text-sm'>
                    <div className='font-medium'>0.01</div>
                    <div className='font-medium text-neutral-secondary'>$ 0.01</div>
                  </Grid>
                  <Grid item md className='text-center text-sm'>
                    <div className='font-medium'>20 %</div>
                  </Grid>
                  <Grid item md></Grid>
                </Grid>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
