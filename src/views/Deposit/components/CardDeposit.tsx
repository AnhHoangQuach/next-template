import React from 'react';
import { Button, Grid, InputAdornment, Paper, TextField } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AvatarSize, InputNumber } from '../../../components/common';
import { useRouter } from 'next/router';

const CardDeposit: React.FunctionComponent = () => {
  const router = useRouter();
  return (
    <Paper className={'mt-4 p-5'} elevation={3}>
      <Button size={'small'} onClick={() => router.back()} variant={'outlined'}>
        <ChevronLeftIcon fontSize={'small'} />
        Back
      </Button>
      <Grid className={'flex justify-center'}>
        <Grid md={8}>
          <div className={'flex justify-center'}>
            <div className={'text-center'}>
              <div className={'text-center font-bold'}>How much would you like to deposit?</div>
              <p className={'text-center text-sm'}>
                Please enter an amount you would like to deposit. The maximum amount you can deposit is shown below.
              </p>
            </div>
          </div>
          <div className={'mt-4'}>
            <div className='mb-1 flex justify-between'>
              <span className='text-sm font-medium'>Available USDC:</span>
              <span className='text-sm font-medium'>
                0 <b>USDC</b>
              </span>
            </div>
            <TextField
              fullWidth
              size='medium'
              placeholder='Amount'
              InputProps={{
                inputComponent: InputNumber,
                startAdornment: (
                  <InputAdornment position='start'>
                    <AvatarSize size={24} src={'https://image.auragi.finance/usdc.png'} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Button size='small' variant='text'>
                      MAX
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={'text-center'} style={{ marginTop: '1.5rem' }}>
            <Button variant={'contained'}>Continue</Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default CardDeposit;
