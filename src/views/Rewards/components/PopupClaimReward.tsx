import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DialogClose } from 'components';

type Props = PopupController & {
  rewards: RewardType[];
};

const PopupClaimReward = ({ rewards, onClose }: Props) => {
  return (
    <>
      <DialogClose onClick={onClose} />
      <DialogTitle>{rewards.length > 1 ? 'Claim Rewards' : 'Claim Reward'}</DialogTitle>
      <DialogContent>Hello</DialogContent>
      <DialogActions></DialogActions>
    </>
  );
};

export default PopupClaimReward;
