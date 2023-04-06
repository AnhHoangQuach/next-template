import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Container, Divider, Drawer, IconButton, List, Paper, Toolbar } from '@mui/material';
import { AuragiLogo } from 'assets/icons';
import { ConnectWallet, Mapple } from 'components';
import { NextImage, NextLink } from 'components/next';
import { AppMenu } from 'containers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { publicRoute } from 'routes';

const AppHeader = () => {
  const router = useRouter();

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(false);
  }, [router]);

  return (
    <>
      <Drawer
        variant='temporary'
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { width: 280, padding: '8px 16px' } }}
      >
        <div className='relative flex h-12 items-center justify-center lg:h-16'>
          <NextLink href={publicRoute.swap.path}>
            <NextImage src={AuragiLogo} alt='Logo' height={40} />
          </NextLink>
        </div>
        <Divider className='my-2' />
        <List className='flex flex-col gap-1'>
          <AppMenu />
        </List>
      </Drawer>

      <div className='px:3 bg-primary-main md:px-20'>
        <Mapple />
      </div>
      <AppBar position='sticky' color='transparent' elevation={0} className='bg-neutral-main'>
        <Toolbar component={Container} maxWidth='xl' className='flex items-center lg:py-4'>
          <IconButton className='lg:hidden' onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <div className='relative hidden w-[240px]  lg:block'>
            <NextLink href={publicRoute.swap.path}>
              <NextImage src={AuragiLogo} alt='Logo' height={40} />
            </NextLink>
          </div>

          <div className='flex flex-1 items-center justify-center'>
            <List component={Paper} className='hidden rounded-full px-3 lg:flex xl:gap-2'>
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
