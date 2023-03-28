import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { ConnectWallet } from 'components';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar color='transparent' position='sticky' className='top-0'>
      <Toolbar className='flex-col'>
        <h1 className='text-[42px] font-bold underline'>Hello world!</h1>
        <ConnectWallet />

        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={'/favicon.ico'} width='120px' className='my-6' />
          <Typography variant='h4' component='h1' gutterBottom>
            Material UI - Next.js example in TypeScript
          </Typography>
          <div className='flex gap-3'>
            <Link href={'/'} className='hover:underline'>
              Home
            </Link>
            <Link href={'/airdrop'} className='hover:underline'>
              Airdrop
            </Link>
            <Link href={'/faucet'} className='hover:underline'>
              Faucet
            </Link>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
