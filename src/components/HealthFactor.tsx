import { styled } from '@mui/material';

type Props = React.HTMLProps<HTMLSpanElement> & {
  value: number;
};

const HealthFactor = styled(({ value, ...props }: Props) => {
  return <span {...props}>{value}</span>;
})(({ value }) => {
  return {
    color: value > 2 ? 'green' : 'orangered',
  };
});

export default HealthFactor;
