import React from 'react';
import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { AvatarSize } from '../../src/components/common';
import DepositInfo from '../../src/views/Deposit/components/DepositInfo';
import CardDeposit from '../../src/views/Deposit/components/CardDeposit';

const DepositDetail: React.FunctionComponent = () => {
  const router = useRouter();
  return (
    <Container>
      <div>
        <div className={'flex items-center gap-1'}>
          <AvatarSize size={32} src={'https://image.auragi.finance/usdc.png'} />
          <h2 className={'text-xl font-bold'}>USDC</h2>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item md={7}>
          <CardDeposit />
        </Grid>
        <Grid item md={5}>
          <DepositInfo />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DepositDetail;
