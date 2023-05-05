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
        { label: 'You Borrowed', value: `< 0.01 ${token.symbol}` },
        { label: 'Total Collateral', value: `< 0.01 ${token.symbol}` },
        { label: 'Loan to Value', value: '80%' },
        { label: 'Health Factor', value: <HealthFactor value={1.2} /> },
        { label: 'RDNT Rewards APR', value: '0 %' },
      ].map((item, index) => (
        <LineItem key={index} label={item.label} value={item.value} />
      ))}
    </Paper>
  );
};

export default CardBalance;
