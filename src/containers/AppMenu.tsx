import { ListItemButton, ListItemText, styled } from '@mui/material';
import { NextLink } from 'components/next';
import { useRouter } from 'next/router';
import { publicRoute } from 'routes';

const StyledListItem = styled(ListItemButton)({
  borderRadius: 9999,
  padding: '4px 12px',
  '&.Mui-selected': {
    color: 'var(--color-primary-main) !important',
    backgroundColor: 'transparent',
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
      <MenuItem {...publicRoute.swap} />
      <MenuItem {...publicRoute.pools} />
      <MenuItem {...publicRoute.vest} />
      <MenuItem {...publicRoute.vote} />
      <MenuItem {...publicRoute.rewards} />
      <MenuItem {...publicRoute.bride} />
      <MenuItem {...publicRoute.faucet} />
      <MenuItem {...publicRoute.airdrop} />
    </>
  );
};

export default AppMenu;
