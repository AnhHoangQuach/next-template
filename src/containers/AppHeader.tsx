import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Container, Divider, Drawer, IconButton, List, Paper, Toolbar } from '@mui/material';
import { AuragiLogo } from 'assets/icons';
import { ConnectWallet } from 'components';
import { NextImage, NextLink } from 'components/next';
import { AppMenu } from 'containers';
import { useState } from 'react';
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
