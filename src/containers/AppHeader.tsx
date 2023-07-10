import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Divider, Drawer, IconButton, List, Toolbar } from '@mui/material';
import { SwitchTheme } from 'components';
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
          <NextLink href={publicRoute.home.path}>
            <NextImage src={require('assets/icons/Muragi.Icon.svg').default} alt='Logo' height={40} />
          </NextLink>
        </div>
        <Divider className='my-2' />
        <List className='flex flex-col gap-1'>
          <AppMenu />
        </List>
      </Drawer>

      <AppBar position='sticky' color='inherit' elevation={1}>
        <Toolbar className='flex h-[64px] items-center'>
          <div className='flex'>
            <IconButton className='lg:hidden' onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </div>

          <div className='relative hidden lg:block'>
            <NextLink href={publicRoute.home.path}>
              <NextImage src={require('assets/icons/Muragi.Icon.svg').default} alt='Logo' height={40} />
            </NextLink>
          </div>

          <List className='mx-10 hidden self-start py-0 lg:flex'>
            <AppMenu />
          </List>
          <div className='flex-1'></div>

          <div className='w-2'></div>
          <SwitchTheme />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppHeader;
