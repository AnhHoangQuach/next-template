import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Container, Divider, Drawer, IconButton, List, Paper, Toolbar } from '@mui/material';
import { AuragiLogo } from 'assets/icons';
import { ConnectWallet } from 'components';
import { NextImage, NextLink } from 'components/next';
import { AppMenu } from 'containers';
import { useState } from 'react';
import { default as Marquee } from 'react-fast-marquee';
import { publicRoute } from 'routes';

const AppHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        variant='temporary'
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { width: 280, padding: '8px 16px' } }}
      >
        <div className='flex justify-center items-center lg:h-16 h-12 relative'>
          <NextLink href={publicRoute.home.path}>
            <NextImage src={AuragiLogo} alt='Logo' height={40} />
          </NextLink>
        </div>
        <Divider className='my-2' />
        <List className='flex flex-col gap-1'>
          <AppMenu />
        </List>
      </Drawer>

      <Marquee pauseOnHover gradient={false} speed={60} className='bg-primary-main'>
        <h5 className='font-bold text-white lg:p-2 p-1'>
          Use faucet and claim airdrop on Testnet to whitelist for retroactive airdrop at token generation event on
          April 5th!
        </h5>
      </Marquee>

      <AppBar position='sticky' color='transparent' elevation={0} className='bg-neutral-main'>
        <Toolbar component={Container} maxWidth='xl' className='flex items-center lg:py-4'>
          <IconButton className='lg:hidden' onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <div className='lg:block hidden relative'>
            <NextLink href={publicRoute.home.path}>
              <NextImage src={AuragiLogo} alt='Logo' height={40} />
            </NextLink>
          </div>

          <div className='flex flex-1 justify-center items-center'>
            <List component={Paper} className='lg:flex hidden xl:gap-2 shadow-base rounded-full px-3'>
              <AppMenu />
            </List>
          </div>

          <ConnectWallet />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppHeader;
