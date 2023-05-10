import { Container } from '@mui/material';
import { useRouterAsset } from 'hooks';
import { publicRoute } from 'routes';

const WithdrawAsset = () => {
  const { token } = useRouterAsset(publicRoute.dashboard.path);

  if (!token) return <></>;
  return (
    <Container>
      <div>WithdrawAsset {token.symbol}</div>
    </Container>
  );
};

export default WithdrawAsset;
