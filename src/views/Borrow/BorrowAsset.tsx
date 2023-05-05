import { Container, Grid } from '@mui/material';
import { useRouterAsset } from 'hooks';
import { publicRoute } from 'routes';
import { CardAssetSelect, CardBalance, CardBorrow } from './components';

const BorrowAsset = () => {
  const { token } = useRouterAsset(publicRoute.borrow.path);

  if (!token) return <></>;
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item md={12}>
          <CardAssetSelect token={token} />
        </Grid>
        <Grid item md={7}>
          <CardBorrow token={token} />
        </Grid>
        <Grid item md={5}>
          <CardBalance token={token} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BorrowAsset;
