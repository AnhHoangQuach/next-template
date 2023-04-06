import { KeyboardArrowRight } from '@mui/icons-material';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { AuragiIconTrans, AuragiLogo } from 'assets/icons';
import { HomeBackground } from 'assets/images';
import { NextImage, NextLink } from 'components/next';
import { AppFooter } from 'containers';
import { publicRoute } from 'routes';

const Home = () => {
  return (
    <main style={{ background: `url(${HomeBackground.src}) no-repeat top left / cover` }}>
      <AppBar position='sticky' color='transparent' elevation={0}>
        <Toolbar component={Container} maxWidth='xl' className='flex items-center py-6'>
          <NextLink href={publicRoute.home.path}>
            <NextImage src={AuragiLogo} alt='Logo' height={40} />
          </NextLink>
        </Toolbar>
      </AppBar>
      <div className='fixed bottom-0 left-0 right-0'>
        <Container maxWidth='xl' className='px-0'>
          <Container maxWidth='md' className='ml-0 flex flex-col items-start gap-8'>
            <NextImage src={AuragiIconTrans} alt='Icon' />
            <Typography variant='h3' component='h1' className='text-primary-dark'>
              Swap, earn, and govern the real yield decentralized crypto trading protocol.
            </Typography>
            <NextLink href={publicRoute.swap.path}>
              <Button
                endIcon={<KeyboardArrowRight className='text-[32px]' />}
                className='h-[60px] px-[40px] text-xl tracking-wider'
              >
                LAUNCH APP
              </Button>
            </NextLink>
          </Container>
          <AppFooter />
        </Container>
      </div>
    </main>
  );
};

export default Home;
