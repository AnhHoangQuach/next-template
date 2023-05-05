import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button, InputAdornment, Paper, TextField } from '@mui/material';
import { AvatarSize, InputNumber } from 'components/common';
import { NextLink } from 'components/next';
import { publicRoute } from 'routes';

type Props = {
  token: TokenType;
};

const CardDeposit = ({ token }: Props) => {
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
          <div className='mb-3 text-center text-xl font-bold'>How much would you like to deposit?</div>
          <div className='mb-6 text-center text-sm'>
            Please enter an amount you would like to deposit.
            <br />
            The maximum amount you can deposit is shown below.
          </div>

          <div>
            <div className='mb-2 flex justify-between text-sm font-medium'>
              <span>Available to Deposit:</span>
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

          <div className='mt-6 flex justify-center'>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};
export default CardDeposit;
