import { AppBar, Container, Toolbar } from '@mui/material';

const AppFooter = () => {
  return (
    <AppBar component='footer' position='static' color='transparent' elevation={0}>
      <Toolbar component={Container} maxWidth='xl' className='flex min-h-[88px]'></Toolbar>
    </AppBar>
  );
};

export default AppFooter;
