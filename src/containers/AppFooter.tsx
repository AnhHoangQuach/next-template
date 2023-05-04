import { AppBar, Container, IconButton, Toolbar, Tooltip } from '@mui/material';
import { NextImage } from 'components/next';

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
              icon: require('assets/icons/socials/Discord.svg'),
              url: 'https://discord.gg/AuragiFinance',
            },
            {
              name: 'Twitter',
              icon: require('assets/icons/socials/Twitter.svg'),
              url: 'https://twitter.com/AuragiFinance',
            },
            {
              name: 'GitBook',
              icon: require('assets/icons/socials/Gitbook.svg'),
              url: 'https://docs.auragi.finance/auriga-finance',
            },
          ].map((item, index) => (
            <a key={index} href={item.url} target='_blank' className='rounded-full'>
              <Tooltip title={item.name}>
                <IconButton sx={{ width: 52, height: 52 }}>
                  <NextImage src={item.icon} width={32} height={32} alt={item.name} />
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
