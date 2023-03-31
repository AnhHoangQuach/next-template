import { AppBar, Container, IconButton, Toolbar } from '@mui/material';

const AppFooter = () => {
  return (
    <AppBar component='footer' position='static' color='transparent' elevation={0}>
      <Toolbar component={Container} maxWidth='xl'>
        <div className='flex items-center gap-2 ml-auto'>
          {[
            {
              icon: 'fa-brands fa-discord',
              url: 'https://discord.gg/xGuKne5Mye',
            },
            {
              icon: 'fa-brands fa-twitter',
              url: 'https://twitter.com/AuragiFinance',
            },
            {
              icon: 'fa-solid fa-file-lines',
              url: 'https://docs.auragi.finance/auriga-finance',
            },
          ].map((item, index) => (
            <a key={index} href={item.url} target='_blank'>
              <IconButton sx={{ width: 52, height: 52 }}>
                <i className={item.icon + ' text-3xl text-primary-light'} />
              </IconButton>
            </a>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppFooter;
