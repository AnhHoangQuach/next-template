import { ArrowDropDown } from '@mui/icons-material';
import { Button, Container, Grid, Paper, Switch } from '@mui/material';
import { AvatarSize } from 'components/common';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';

const Dashboard = () => {
  const { allTokens } = useSelector(assetSelector);

  return (
    <>
      <Container maxWidth='xl' className='space-y-10'>
        <h1 className='-mb-7 text-2xl font-bold'>Lending Dashboard</h1>
        <Grid
          container
          component={Paper}
          className='py-6'
          sx={{ '& .MuiGrid-item:not(:first-child)': { borderLeftWidth: 1 } }}
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
              <Grid item md={2.5} className='flex justify-start'>
                <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                  <span className='text-sm font-bold'>Your Deposits</span>
                  <ArrowDropDown />
                </div>
              </Grid>
              <Grid item md={2.5} className='flex justify-center'>
                <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                  <span className='text-sm'>Your Balance</span>
                  <ArrowDropDown />
                </div>
              </Grid>
              <Grid item md={2} className='flex justify-center'>
                <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                  <span className='text-sm'>APY</span>
                  <ArrowDropDown />
                </div>
              </Grid>
              <Grid item md className='flex justify-start'>
                <div className='cursor-pointer px-3 text-neutral-secondary hover:text-neutral-primary'>
                  <span className='text-sm'>Collateral</span>
                </div>
              </Grid>
            </Grid>

            <div className='space-y-3'>
              {allTokens.map((item) => (
                <Grid
                  container
                  key={item.address}
                  component={Paper}
                  variant='outlined'
                  className='items-center py-3 shadow-sm'
                >
                  <Grid item md={2.5}>
                    <div className='flex items-center gap-2 border-l-2 border-secondary-main px-3'>
                      <AvatarSize size={24} src={item.logoURI} />
                      <span className='font-bold'>{item.symbol}</span>
                    </div>
                  </Grid>
                  <Grid item md={2.5} className='text-center text-sm'>
                    <div className='font-medium'>0.01</div>
                    <div className='font-medium text-neutral-secondary'>$ 0.01</div>
                  </Grid>
                  <Grid item md={2} className='text-center text-sm'>
                    <div className='font-medium'>20 %</div>
                  </Grid>
                  <Grid item md className='flex items-center'>
                    <Switch />
                    <div className='ml-auto space-x-3 px-3'>
                      <Button size='small'>Deposit</Button>
                      <Button size='small' variant='text'>
                        Withdraw
                      </Button>
                    </div>
                  </Grid>
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
