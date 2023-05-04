import { ExpandLess, ExpandMore, OpenInNew } from '@mui/icons-material';
import { Button, Chip, Collapse, Grid, IconButton, InputAdornment, Paper, Tab, Tabs, TextField } from '@mui/material';
import { AvatarSize, InputNumber } from 'components/common';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { publicRoute } from 'routes';

type Props = {
  token: TokenType;
};

const TokenRow = ({ token }: Props) => {
  const router = useRouter();
  const { AGI } = useSelector(assetSelector);

  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Grid
        container
        component={Paper}
        variant='outlined'
        className={
          'relative rounded-base p-4 shadow-sm hover:shadow-md hover:shadow-primary-main ' +
          (isOpen ? 'rounded-b-none shadow-primary-main' : '')
        }
      >
        <Grid item md>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <AvatarSize size={24} src={token.logoURI} />
              <span className='font-bold'>{token.symbol}</span>
            </div>
            <div className='text-sm'>
              <span className='font-bold'>Deposits:</span>{' '}
              <span className='font-medium text-neutral-secondary'>$24,123,323.12</span>
            </div>
            <div className='text-sm'>
              <span className='font-bold'>Borrows:</span>{' '}
              <span className='font-medium text-neutral-secondary'>$23,323.12</span>
            </div>
          </div>
        </Grid>
        <Grid item md>
          <div className='flex flex-col items-center'>
            <div className='mb-1 text-sm font-medium text-neutral-secondary'>1.84%</div>
            <div className='rounded-full bg-gradient-to-t from-[orange] to-[cyan] p-[1px]'>
              <Chip
                label='5.71% APR'
                icon={<AvatarSize size={24} src={AGI.logoURI} />}
                className='bg-paper-main font-bold'
              />
            </div>
          </div>
        </Grid>
        <Grid item md></Grid>
        <Grid item md></Grid>
        <div className='absolute inset-0 left-[unset] flex items-center p-2'>
          <IconButton
            onClick={() => {
              setOpen((open) => !open);
            }}
          >
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </div>
      </Grid>

      <Collapse in={isOpen}>
        <Paper variant='outlined' className='mt-3 rounded-t-none'>
          <Tabs value={activeTab} onChange={(event, value) => setActiveTab(value)}>
            <Tab label='Deposit'></Tab>
            <Tab label='Borrow'></Tab>
            <Tab
              label={
                <div className='relative'>
                  <span>Loop</span>
                  <OpenInNew className='absolute right-[-20px] top-[-4px] text-sm' />
                </div>
              }
              onClick={() => router.push(publicRoute.assetsView.url(token.address))}
            />
          </Tabs>

          <Grid container gap={5} className='px-4 pb-6 pt-3'>
            <Grid item md={4}>
              <div className='mb-3 text-sm font-bold'>Please enter the amount you would like to deposit.</div>
              <div>
                <div className='mb-1 flex justify-between'>
                  <span className='text-sm font-medium'>Available {token.symbol}:</span>
                  <span className='text-sm font-medium'>
                    0 <b>{token.symbol}</b>
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
            </Grid>
            <Grid item md={3} className='flex items-end py-1'>
              <div className='flex-1 space-y-1'>
                <div className='flex justify-between text-sm'>
                  <span>Required lock value for emissions:</span>
                  <span>$0</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span>Your locked value:</span>
                  <span>$0</span>
                </div>
              </div>
            </Grid>
            <Grid item md className='flex items-end py-1.5'>
              <Button className='rounded-full px-10' variant='outlined' size='medium'>
                Deposit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Collapse>
    </div>
  );
};

export default TokenRow;
