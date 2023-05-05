import React, { useState } from 'react';
import { Button, ButtonGroup, Container, Divider, Grid, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import { AvatarSize } from '../../components/common';
import { dataCoins } from './config';
import Link from 'next/link';

enum Type {
  ALL,
  STABLE,
}

const Deposit: React.FunctionComponent = () => {
  const [value, setValue] = useState<Type>(Type.ALL);
  return (
    <Container>
      <h1 className={'text-2xl font-bold'}>Deposit</h1>
      <Grid container spacing={4}>
        <Grid item md={8} xs={12}>
          <div className={'tex-lg font-semibold'}>Available to Deposit</div>
          <Paper className={'p-5'} elevation={3}>
            <Grid container spacing={2}>
              <Grid className={'flex items-end'} item xs={6}>
                <ButtonGroup className={'mb-2'} variant='contained' aria-label='outlined primary button group'>
                  <Button onClick={() => setValue(Type.ALL)} variant={value === Type.ALL ? 'contained' : 'outlined'}>
                    All
                  </Button>
                  <Button
                    onClick={() => setValue(Type.STABLE)}
                    variant={value === Type.STABLE ? 'contained' : 'outlined'}
                  >
                    Stable Coin
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid className={"items-end' flex justify-end"} item xs={6}>
                <FormControl size={'small'} sx={{ m: 1, width: '25ch' }} variant='outlined'>
                  <OutlinedInput
                    size={'small'}
                    placeholder={'Search'}
                    id='outlined-adornment-password'
                    type={'text'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton aria-label='toggle password visibility' edge='end'>
                          {<SearchIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid className={'mt-3'} container>
              {[{ label: 'Assets' }, { label: 'Your Wallet Balance' }, { label: 'APY' }].map((item, index) => (
                <Grid key={index} item md className='flex justify-center text-neutral-secondary'>
                  <div className='cursor-pointer pl-3 hover:text-neutral-primary'>
                    <span className='text-sm font-bold'>{item.label}</span>
                    <ArrowDropDown />
                  </div>
                </Grid>
              ))}
            </Grid>
            {dataCoins.map((item: any) => {
              return (
                <Link href={'/deposit/4343443344'} key={item.symbol}>
                  <Grid
                    container
                    component={Paper}
                    variant='outlined'
                    className={'relative mt-4 rounded-base p-4 shadow-sm hover:shadow-base hover:shadow-primary-main '}
                  >
                    <Grid item md>
                      <div className={'flex items-center gap-1'}>
                        <AvatarSize size={24} src={item.tokenUri} />
                        <h2 className={'text-xl font-bold'}>{item.symbol}</h2>
                      </div>
                    </Grid>
                    <Grid item md className={'flex justify-center'}>
                      <div className={'flex items-center gap-1'}>
                        <h2 className={'text-md'}>{item.balance}</h2>
                      </div>
                    </Grid>
                    <Grid item md className={'flex justify-center'}>
                      <div className={'flex items-center gap-1'}>
                        <h2 className={'text-md font-medium'}>{item.apr}%</h2>
                      </div>
                    </Grid>
                  </Grid>
                </Link>
              );
            })}
          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <h1 className={'tex-lg font-semibold'}>My deposit</h1>
          <Paper className={'p-5'} elevation={3}>
            {dataCoins.slice(0, 2).map((item) => {
              return (
                <React.Fragment key={item.tokenUri}>
                  <div className={'flex justify-between'}>
                    <div className={'flex items-center gap-1'}>
                      <AvatarSize size={24} src={item.tokenUri} />
                      <h2 className={'text-lg'}>{item.symbol}</h2>
                    </div>
                    <div>0.01</div>
                  </div>
                  <Divider className={'my-3'} />
                </React.Fragment>
              );
            })}
            <div className={'flex justify-between'}>
              <div>Total</div>
              <span>$0.1</span>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Deposit;
