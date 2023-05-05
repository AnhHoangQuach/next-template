import { ArrowDropDown, BarChart } from '@mui/icons-material';
import { Button, Container, Divider, Grid, Paper } from '@mui/material';
import { AvatarSize } from 'components/common';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { TokenRow } from './components';

const Market = () => {
  const { allTokens } = useSelector(assetSelector);

  return (
    <Container className='space-y-10 py-10'>
      <Grid container gap={2}>
        <Grid item md className='space-y-3'>
          <h1
            className='text-gradient text-[60px] font-black uppercase leading-none'
            style={{
              background: 'linear-gradient(120deg, var(--color-primary-light) 0%, var(--color-secondary-main))',
            }}
          >
            Earn interest & borrow assets cross-chain in 3 clicks
          </h1>
          <h6 className='text-xl uppercase'>Welcome to the future of Omnichain lending</h6>
          <div className='flex gap-3'>
            <Button size='large' variant='outlined' className='rounded-xl border-2 px-10'>
              Learn More
            </Button>
            <Button size='large' className='rounded-xl px-14'>
              Buy RDNT
            </Button>
          </div>
        </Grid>

        <Grid item md={4} className='space-y-6'>
          <Paper className='px-3 py-6 text-center'>
            <div className='font-medium'>Platform Fees Paid to Lockers</div>
            <div className='mb-3 mt-1 text-4xl font-bold text-primary-main'>$6,476,686.80</div>
            <div className='text-sm'>
              Platform Fees such as interest, early exit penalties and liquidations are distributed to RDNT Lockers.
            </div>
          </Paper>
          <Paper className='px-3 py-6'>
            <div className='mb-3 text-center text-lg font-bold'>
              Lock <span className='text-primary-main'>RDNT</span> <span className='font-normal'>and</span> earn{' '}
              <span className='text-primary-main'>0% APR</span> <span className='font-normal'>paid in</span>
            </div>
            <Grid container spacing={1}>
              {allTokens.map((item) => (
                <Grid item md={6} key={item.address}>
                  <div className='flex justify-between rounded border p-3'>
                    <div className='flex items-center gap-2'>
                      <AvatarSize size={24} src={item.logoURI} />
                      <span className='text-sm font-medium'>{item.symbol}</span>
                    </div>
                    <div className='font-bold'>{item.decimals}%</div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Paper>
        <div className='flex justify-between px-6 py-3'>
          <div className='font-bold'>Stats overview</div>
          <div className='cursor-pointer text-neutral-secondary hover:text-primary-main'>
            <span className='mr-2 text-sm font-bold'>Assets breakdown</span>
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
                <Button variant='outlined' className='w-[120px]' hidden={index !== 2}>
                  Buy
                </Button>
                <Button variant='outlined' className='w-[120px]' hidden={index !== 3}>
                  Lock
                </Button>
                <Button variant='outlined' className='w-[120px]' hidden={index !== 4}>
                  Stake
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Paper>

      <Paper>
        <div className='flex justify-between px-6 py-3'>
          <div className='font-bold'>Market assets</div>
        </div>
        <Divider />
        <div className='space-y-3 p-6'>
          <Grid container className='px-4'>
            <Grid item md className='flex justify-start'>
              <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                <span className='text-sm font-bold'>Assets</span>
                <ArrowDropDown />
              </div>
            </Grid>
            <Grid item md className='flex justify-center'>
              <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                <span className='text-sm font-bold'>Market Size</span>
                <ArrowDropDown />
              </div>
            </Grid>
            <Grid item md className='flex justify-center'>
              <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                <span className='text-sm font-bold'>Total Borrowed</span>
                <ArrowDropDown />
              </div>
            </Grid>
            <Grid item md className='flex justify-center'>
              <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                <span className='text-sm font-bold'>Deposit APY</span>
                <ArrowDropDown />
              </div>
            </Grid>
            <Grid item md className='flex justify-center'>
              <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                <span className='text-sm font-bold'>Borrow APY</span>
                <ArrowDropDown />
              </div>
            </Grid>
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
