import { ArrowDropDown } from '@mui/icons-material';
import { Button, Container, FormControlLabel, Grid, Paper, Switch } from '@mui/material';
import { HealthFactor } from 'components';
import { AvatarSize } from 'components/common';
import { NextLink } from 'components/next';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { publicRoute } from 'routes';

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
            <div className='text-4xl font-bold'>
              <HealthFactor value={3232322.232} />
            </div>
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
                  <Grid item md={2.5} className='text-center'>
                    <div className='font-medium'>0.01</div>
                    <div className='text-sm font-medium text-neutral-secondary'>$ 0.01</div>
                  </Grid>
                  <Grid item md={2} className='text-center'>
                    <div className='font-medium'>20 %</div>
                  </Grid>
                  <Grid item md className='flex items-center gap-3 pr-3'>
                    <FormControlLabel label={<span>Yes</span>} labelPlacement='start' control={<Switch />} />
                    <NextLink href={publicRoute.depositAsset.url(item)} className='ml-auto'>
                      <Button size='small'>Deposit</Button>
                    </NextLink>
                    <NextLink href={publicRoute.withdrawAsset.url(item)}>
                      <Button size='small' variant='text'>
                        Withdraw
                      </Button>
                    </NextLink>
                  </Grid>
                </Grid>
              ))}
            </div>
          </Grid>

          <Grid item md={6}>
            <Grid container className='mb-2'>
              <Grid item md={2.5} className='flex justify-start'>
                <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                  <span className='text-sm font-bold'>Your Borrows</span>
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
              <Grid item md></Grid>
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
                  <Grid item md={2.5} className='text-center'>
                    <div className='font-medium'>0.01</div>
                    <div className='text-sm font-medium text-neutral-secondary'>$ 0.01</div>
                  </Grid>
                  <Grid item md={2} className='text-center'>
                    <div className='font-medium'>20 %</div>
                  </Grid>
                  <Grid item md className='flex items-center gap-3 pr-3'>
                    <NextLink href={publicRoute.borrowAsset.url(item)} className='ml-auto'>
                      <Button size='small'>Borrow</Button>
                    </NextLink>
                    <NextLink href={publicRoute.repayAsset.url(item)}>
                      <Button size='small' variant='text'>
                        Repay
                      </Button>
                    </NextLink>
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
