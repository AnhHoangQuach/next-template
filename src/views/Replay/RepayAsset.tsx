import { Container } from '@mui/material';
import { useRouterAsset } from 'hooks';
import { publicRoute } from 'routes';

const RepayAsset = () => {
  const { token } = useRouterAsset(publicRoute.dashboard.path);

  if (!token) return <></>;
  return (
    <Container>
      <div>RepayAsset {token.symbol}</div>
    </Container>
  );
};

export default RepayAsset;
