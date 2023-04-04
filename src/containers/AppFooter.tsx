import { AppBar, Container, IconButton, Toolbar, Tooltip } from '@mui/material';

const AppFooter = () => {
  return (
    <AppBar component='footer' position='static' color='transparent' elevation={0}>
      <Toolbar component={Container} maxWidth='xl' className='min-h-[88px]'>
        <div className='ml-auto flex items-center gap-2'>
          {[
            {
              name: 'Discord',
              icon: 'fa-brands fa-discord',
              url: 'https://discord.gg/AuragiFinance',
            },
            {
              name: 'Twitter',
              icon: 'fa-brands fa-twitter',
              url: 'https://twitter.com/AuragiFinance',
            },
            {
              name: 'GitBook',
              icon: 'fa-solid fa-file-lines',
              url: 'https://docs.auragi.finance/auriga-finance',
            },
          ].map((item, index) => (
            <a key={index} href={item.url} target='_blank' className='rounded-full'>
              <Tooltip title={item.name}>
                <IconButton sx={{ width: 52, height: 52 }}>
                  <i className={item.icon + ' text-3xl text-primary-light'} />
                </IconButton>
              </Tooltip>
            </a>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppFooter;
