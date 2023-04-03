import { CancelOutlined, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';

const StatusIcon = ({ status }: { status: PopupStepStatus }) => {
  if (status === 'IDLE') {
    return <RadioButtonUnchecked sx={{ fontSize: 28 }} color='disabled' />;
  }
  if (status === 'LOADING' || status === 'TRYAGAIN') {
    return <CircularProgress size={23} />;
  }
  if (status === 'ERROR') {
    return <CancelOutlined sx={{ fontSize: 28 }} color='error' />;
  }
  if (status === 'SUCCESS') {
    return <CheckCircle sx={{ fontSize: 28, color: '#89C87B' }} />;
  }
  return null;
};

type Props = {
  status?: PopupStepStatus;
  action?: string;
  description?: string;
  onTryAgain?: () => void;
};

const StepClaimReward = ({ status = 'IDLE', action, description, onTryAgain }: Props) => {
  return (
    <div className='mb-3 flex flex-row-reverse gap-1'>
      <div className='flex h-[32px] w-[32px] items-center justify-center'>
        <StatusIcon status={status} />
      </div>
      <div className='flex-1 py-[3px]'>
        <div className='font-medium'>{action}</div>
        <div className='text-sm text-neutral-secondary'>{description}</div>
        {/* {(status === 'ERROR' || status === 'TRYAGAIN') && (
          <Button
            size='small'
            variant='outlined'
            disabled={status === 'TRYAGAIN'}
            onClick={onTryAgain}
            className='mt-1 rounded'
          >
            Try again
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default StepClaimReward;
