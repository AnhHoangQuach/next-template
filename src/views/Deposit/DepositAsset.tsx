import { Container, Grid } from '@mui/material';
import { useRouterAsset } from 'hooks';
import { publicRoute } from 'routes';
import { CardAssetSelect, CardBalance, CardDeposit } from './components';

const DepositAsset = () => {
  const { token } = useRouterAsset(publicRoute.deposit.path);

  if (!token) return <></>;
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item md={12}>
          <CardAssetSelect token={token} />
        </Grid>
        <Grid item md={7}>
          <CardDeposit token={token} />
        </Grid>
        <Grid item md={5}>
          <CardBalance token={token} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DepositAsset;
