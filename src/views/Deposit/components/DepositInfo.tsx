import React from 'react';
import { Paper } from '@mui/material';

const DepositInfo: React.FunctionComponent = () => {
  return (
    <Paper className={'mt-4 space-y-2 p-5'} elevation={3}>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Your Balance</div>
        <div className={'font-bold'}>0.00 USDC</div>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Your Wallet Balance</div>
        <div className={'font-bold'}>0.00 USDC</div>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Health Factor</div>
        <span className={'font-bold'}>101</span>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Utilization Rate</div>
        <span className={'font-bold'}>27.35%</span>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Available Liquidity</div>
        <span className={'font-bold'}>106,041.6725USDT</span>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Deposit APY</div>
        <span className={'font-bold'}>0.3%</span>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>RDNT Rewards APR</div>
        <span className={'font-bold'}>0%</span>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Can be used as collateral</div>
        <span className={'font-bold'}>Yes</span>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Asset Price</div>
        <span className={'font-bold'}>$ 1USD</span>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Maximum LTV</div>
        <span className={'font-bold'}>80%</span>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Liquidation Threshold</div>
        <span className={'font-bold'}>85%</span>
      </div>
      <div className={'flex justify-between'}>
        <div className={'text-sm'}>Liquidation Penalty</div>
        <span className={'font-bold'}>15%</span>
      </div>
    </Paper>
  );
};

export default DepositInfo;
