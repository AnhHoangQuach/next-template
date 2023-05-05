import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button, InputAdornment, MenuItem, Paper, Slider, SliderProps, TextField, styled } from '@mui/material';
import { HealthFactor } from 'components';
import { AvatarSize, InputNumber } from 'components/common';
import { NextLink } from 'components/next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { publicRoute } from 'routes';

type Props = {
  token: TokenType;
};

const StyledSlider = styled(({ ...props }: SliderProps) => <Slider {...props} />)(() => ({
  '&.MuiSlider-root': {
    height: 12,
  },
  '& .MuiSlider-rail': {
    opacity: 1,
    background: 'linear-gradient(to right, #3cecd1, #ffc64e, #ff59a4)',
  },
  '& .MuiSlider-track': {
    opacity: 0,
  },
  '& .MuiSlider-thumb': {
    backgroundColor: '#fff',
    width: 24,
    height: 24,
  },
}));

const CardBorrow = ({ token }: Props) => {
  const { allTokens } = useSelector(assetSelector);

  const [value, setValue] = useState(0);

  return (
    <Paper className='p-6'>
      <div>
        <NextLink href={publicRoute.deposit.path}>
          <Button size='small' variant='outlined' className='pr-4' startIcon={<KeyboardArrowLeft />}>
            Back
          </Button>
        </NextLink>
      </div>

      <div className='flex justify-center'>
        <div className='max-w-[400px]'>
          <div className='mb-3 text-center text-2xl font-bold'>Borrow {token.symbol}</div>
          <div className='mb-6 text-center text-sm'>
            Please enter an amount you would like to borrow.
            <br />
            Optionally, send your borrowed assets directly to another chain.
          </div>

          <div>
            <div className='mb-2 flex justify-between text-sm font-medium'>
              <span>Available to Borrow:</span>
              <span>
                {0} <span className='font-bold'>{token.symbol}</span>
              </span>
            </div>
            <TextField
              fullWidth
              placeholder='0.00'
              InputProps={{
                inputComponent: InputNumber,
                startAdornment: (
                  <InputAdornment position='start'>
                    <AvatarSize size={24} src={token.logoURI} />
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

          <div className='mt-6'>
            <div className='flex justify-between text-sm font-medium'>
              <span className='text-green'>Safer</span>
              <span className='text-neutral-secondary'>
                New Health Factor: <HealthFactor value={3 - 2.4 * value} />
              </span>
              <span className='text-purple'>Risker</span>
            </div>
            <StyledSlider
              min={0}
              max={1}
              step={0.01}
              value={value}
              onChange={(event, value: number) => {
                setValue(value);
              }}
            />
          </div>

          <TextField
            select
            fullWidth
            value={token.address}
            onChange={({ target: { value } }) => {
              //
            }}
            size='small'
            color='secondary'
            sx={{
              '&:hover': {
                backgroundColor: 'var(--color-paper-dark)',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: 0,
                borderWidth: '0px !important',
                borderLeftWidth: '4px !important',
                borderColor: 'var(--color-secondary-main)',
              },
            }}
            SelectProps={{
              renderValue: () => (
                <div className='flex items-center gap-3'>
                  <AvatarSize sizes='large' src={token.logoURI} />
                  <div>
                    <div className='text-sm font-medium text-neutral-secondary'> {token.symbol}</div>
                    <div className='text-xl font-bold'>{token.name}</div>
                  </div>
                </div>
              ),
            }}
          >
            {allTokens.map((item) => (
              <MenuItem key={item.address} value={item.address} className='flex gap-6'>
                <AvatarSize sizes='small' src={item.logoURI} />
                <div className='w-[80px] font-medium'>{item.symbol}</div>
                <div className='font-medium text-neutral-secondary'>{item.name}</div>
              </MenuItem>
            ))}
          </TextField>

          <div className='mt-6 flex justify-center'>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};
export default CardBorrow;
