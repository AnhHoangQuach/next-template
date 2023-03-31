import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Web3Button } from '@web3modal/react';
import { ConnectWallet } from 'components';
import { NextImage, NextLink } from 'components/next';

const AppHeader = () => {
  return (
    <AppBar color='transparent' position='sticky' className='bg-[#f5f9fe] top-0'>
      <Toolbar className='flex-col'>
        <h1 className='text-[42px] font-bold underline'>Hello world!</h1>
        <ConnectWallet />
        <Web3Button />

        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NextImage src={'/favicon.ico'} alt='favicon' width={120} height={120} className='my-6' />
          <Typography variant='h4' component='h1' gutterBottom>
            Material UI - Next.js example in TypeScript
          </Typography>
          <div className='flex gap-3'>
            <NextLink href={'/'} className='hover:underline'>
              Home
            </NextLink>
            <NextLink href={'/airdrop'} className='hover:underline'>
              Airdrop
            </NextLink>
            <NextLink href={'/faucet'} className='hover:underline'>
              Faucet
            </NextLink>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
