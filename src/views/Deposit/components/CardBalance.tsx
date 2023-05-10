import { Paper } from '@mui/material';
import { HealthFactor } from 'components';

type LineProps = {
  label: string;
  value: React.ReactNode;
};

const LineItem = ({ label, value }: LineProps) => {
  return (
    <div className='flex justify-between'>
      <span className='text-sm text-neutral-secondary'>{label}</span>
      <span className='font-bold'>{value}</span>
    </div>
  );
};

type Props = {
  token: TokenType;
};
const CardBalance = ({ token }: Props) => {
  return (
    <Paper className='space-y-3 p-6'>
      {[
        { label: 'Your Balance', value: `< 0.01 ${token.symbol}` },
        { label: 'Your Wallet Balance', value: `< 0.01 ${token.symbol}` },
        { label: 'Health Factor', value: <HealthFactor value={1.2} /> },
        { label: 'RDNT Rewards APR', value: '0 %' },
        { label: 'Can be used as collateral', value: <span className='font-normal'>Yes</span> },
        { label: 'Maximum LTV', value: '80 %' },
        { label: 'Liquidation Threshold', value: '82.5 %' },
        { label: 'Liquidation Penalty', value: '15 %' },
      ].map((item, index) => (
        <LineItem key={index} label={item.label} value={item.value} />
      ))}
    </Paper>
  );
};

export default CardBalance;
