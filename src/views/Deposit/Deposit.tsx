import { ArrowDropDown } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Button, ButtonGroup, Container, Grid, Paper, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AvatarSize } from 'components/common';
import { NextLink } from 'components/next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { publicRoute } from 'routes';

const StableOptions = [
  { value: false, label: 'All' },
  { value: true, label: 'Stable Coin' },
];

const Deposit = () => {
  const { allTokens } = useSelector(assetSelector);

  const [stable, setStable] = useState(false);

  return (
    <Container>
      <h1 className='mb-3 text-2xl font-bold'>Deposit</h1>
      <Grid container columnSpacing={5}>
        <Grid item md={8}>
          <h6 className='mb-2 text-xl font-bold'>Available to Deposit</h6>
          <Paper className='p-6'>
            <div className='mb-6 flex items-start justify-between'>
              <ButtonGroup>
                {StableOptions.map((item, index) => {
                  const isActive = item.value === stable;
                  return (
                    <Button
                      key={index}
                      variant={isActive ? 'contained' : 'outlined'}
                      onClick={() => setStable(item.value)}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </ButtonGroup>

              <TextField
                placeholder='Search'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <Grid container className='mb-3 px-4'>
              <Grid item md className='flex justify-start'>
                <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                  <span className='text-sm font-bold'>Assets</span>
                  <ArrowDropDown />
                </div>
              </Grid>
              <Grid item md className='flex justify-center'>
                <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                  <span className='text-sm font-bold'>Your Wallet Balance</span>
                  <ArrowDropDown />
                </div>
              </Grid>
              <Grid item md className='flex justify-center'>
                <div className='cursor-pointer pl-3 text-neutral-secondary hover:text-neutral-primary'>
                  <span className='text-sm font-bold'>APY</span>
                  <ArrowDropDown />
                </div>
              </Grid>
            </Grid>

            <div className='flex flex-col gap-3'>
              {allTokens.map((item) => (
                <NextLink key={item.address} href={publicRoute.depositAsset.url(item)}>
                  <Grid
                    container
                    component={Paper}
                    variant='outlined'
                    className='items-center px-4 py-3 shadow-sm hover:shadow-md hover:shadow-primary-main'
                  >
                    <Grid item md>
                      <div className='flex items-center gap-2'>
                        <AvatarSize size={40} src={item.logoURI} />
                        <span className='text-xl font-bold'>{item.symbol}</span>
                      </div>
                    </Grid>
                    <Grid item md className='text-center'>
                      <div className='font-medium'>0.01</div>
                      <div className='text-sm font-medium text-neutral-secondary'>$ 0.01</div>
                    </Grid>
                    <Grid item md className='text-center'>
                      <div className='font-medium'>20 %</div>
                    </Grid>
                  </Grid>
                </NextLink>
              ))}
            </div>
          </Paper>
        </Grid>

        <Grid item md={4}>
          <h6 className='mb-2 text-xl font-bold'>My Deposits</h6>
          <Paper className='p-6'>
            {allTokens.map((item) => {
              return (
                <div key={item.address} className='flex justify-between border-b py-3 '>
                  <NextLink href={publicRoute.depositAsset.url(item)}>
                    <div className='flex items-center gap-2 hover:text-primary-main'>
                      <AvatarSize size={24} src={item.logoURI} />
                      <h2 className='font-medium'>{item.symbol}</h2>
                    </div>
                  </NextLink>
                  <span>0.01</span>
                </div>
              );
            })}

            <div className='flex justify-between py-3'>
              <span>Total</span>
              <span className='font-bold'>$ 230.1</span>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Deposit;
