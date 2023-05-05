import { styled } from '@mui/material';

type Props = React.HTMLProps<HTMLSpanElement> & {
  value: number;
};

const HealthFactor = styled(({ value, ...props }: Props) => {
  const formated = value
    .toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })
    .replaceAll(/,/g, '');
  return <span {...props}>{formated}</span>;
})(({ value }) => {
  return {
    color: value > 2 ? 'green' : value > 1.5 ? 'orange' : value > 1 ? 'orangered' : 'red',
  };
});

export default HealthFactor;
