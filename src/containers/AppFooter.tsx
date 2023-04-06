import { AppBar, Container, IconButton, Toolbar, Tooltip } from '@mui/material';

type Props = {
  reverse?: boolean;
};

const AppFooter = ({ reverse }: Props) => {
  return (
    <AppBar component='footer' position='static' color='transparent' elevation={0}>
      <Toolbar
        component={Container}
        maxWidth='xl'
        className={'flex min-h-[88px] ' + (reverse ? 'flex-row-reverse' : 'flex-row')}
      >
        <div className='flex items-center gap-2'>
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
                  <i className={item.icon + ' text-3xl text-primary-main'} />
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
