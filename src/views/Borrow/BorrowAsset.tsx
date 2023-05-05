import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { publicRoute } from 'routes';
import { CardAssetSelect, CardBalance, CardBorrow } from './components';

const BorrowAsset = () => {
  const router = useRouter();
  const { allTokens } = useSelector(assetSelector);

  const [token, setToken] = useState<TokenType>();

  useEffect(() => {
    const { address } = router.query;
    const selectToken = allTokens.find((item) => item.address === address);
    if (selectToken) {
      setToken(selectToken);
    } else {
      router.replace(publicRoute.deposit.path);
    }
  }, [router, allTokens]);

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
