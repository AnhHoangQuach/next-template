import { ListItemButton, ListItemText, styled } from '@mui/material';
import { NextLink } from 'components/next';
import { useRouter } from 'next/router';
import { publicRoute } from 'routes';

const StyledListItem = styled(ListItemButton)({
  padding: '12px 20px',
  borderTop: '3px solid transparent',
  borderBottom: '3px solid transparent',
  '&.Mui-selected': {
    color: 'var(--color-primary-main) !important',
    backgroundColor: 'transparent',
    borderTopColor: 'var(--color-secondary-main)',
  },
  '&:hover': {
    color: 'var(--color-primary-main) !important',
  },
});

const MenuItem = ({ path, name }: { path: string; name?: string }) => {
  const router = useRouter();
  const isHome = router.pathname === publicRoute.home.path;
  const isSelected = isHome ? router.pathname === path : router.pathname.startsWith(path);

  return (
    <NextLink href={path} className='rounded-full'>
      <StyledListItem selected={isSelected}>
        <ListItemText classes={{ primary: 'font-medium' }}>{name}</ListItemText>
      </StyledListItem>
    </NextLink>
  );
};

const AppMenu = () => {
  return (
    <>
      <MenuItem {...publicRoute.market} />
      <MenuItem {...publicRoute.swap} />
      <MenuItem {...publicRoute.pools} />
      <MenuItem {...publicRoute.vest} />
      <MenuItem {...publicRoute.vote} />
      <MenuItem {...publicRoute.rewards} />
      <MenuItem {...publicRoute.bride} />
      <MenuItem {...publicRoute.airdrop} />
    </>
  );
};

export default AppMenu;
