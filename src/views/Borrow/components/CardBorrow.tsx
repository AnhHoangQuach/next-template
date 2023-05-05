import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button, InputAdornment, MenuItem, Paper, Slider, SliderProps, TextField, styled } from '@mui/material';
import { HealthFactor } from 'components';
import { AvatarSize, InputNumber } from 'components/common';
import { NextLink } from 'components/next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { publicRoute } from 'routes';
import { arbitrum, avalanche, bsc, fantom, mainnet, polygon } from 'wagmi/chains';

const chainList = [mainnet, arbitrum, polygon, bsc, fantom, avalanche];

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

  const [chain, setChain] = useState(chainList[0]);
  const [percent, setPercent] = useState(0);

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
        <div className='max-w-[400px] space-y-6'>
          <div>
            <div className='mb-3 text-center text-2xl font-bold'>Borrow {token.symbol}</div>
            <div className='text-center text-sm'>
              Please enter an amount you would like to borrow.
              <br />
              Optionally, send your borrowed assets directly to another chain.
            </div>
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

          <div className='px-10'>
            <div className='flex justify-between text-sm font-medium'>
              <span className='text-green'>Safer</span>
              <span className='text-neutral-secondary'>
                New Health Factor: <HealthFactor value={3 - 2.4 * percent} />
              </span>
              <span className='text-purple'>Risker</span>
            </div>
            <StyledSlider
              min={0}
              max={1}
              step={0.01}
              value={percent}
              onChange={(event, value: number) => {
                setPercent(value);
              }}
            />
          </div>

          <TextField
            select
            fullWidth
            value={chain.id}
            onChange={({ target: { value } }) => {
              setChain(chainList.find((item) => item.id === +value)!);
            }}
            SelectProps={{
              renderValue: () => (
                <div className='flex items-center gap-3'>
                  <AvatarSize sizes='small' src={allTokens[chainList.indexOf(chain) % 3].logoURI} />
                  <div className='font-medium'>{chain.name}</div>
                </div>
              ),
            }}
          >
            {chainList.map((item, index) => (
              <MenuItem key={item.id} value={item.id} className='flex gap-3'>
                <AvatarSize sizes='small' src={allTokens[index % 3].logoURI} />
                <div className='font-medium'>{item.name}</div>
              </MenuItem>
            ))}
          </TextField>

          <div className='flex justify-center'>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};
export default CardBorrow;
