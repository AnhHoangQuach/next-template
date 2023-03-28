import { Avatar, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchBalance } from '@wagmi/core';
import { useState } from 'react';
import { shorten } from 'utils/common';
import { useAccount, useDisconnect } from 'wagmi';

const PopupAccount = ({ onClose }: PopupController) => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const [isCopy, setIsCopy] = useState(false);

  const { data: balance } = useQuery(['fetchBalance', { address }], () => fetchBalance({ address: address! }), {
    enabled: !!address,
  });

  const handleClickCopy = (text: string) => {
    setIsCopy(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsCopy(false);
    }, 1500);
  };

  const handleClickDisconnect = () => {
    disconnect();
    onClose();
  };

  return (
    <>
      <DialogTitle>
        <Avatar className='w-[72px] h-[72px] mx-auto'>
          <span className='text-5xl mt-[8px]'>🐭</span>
        </Avatar>
      </DialogTitle>
      <DialogContent className='min-h-0 text-center'>
        <div className='text-xl'>{shorten(address)}</div>
        <div>
          {Number(balance?.formatted ?? 0).toFixed(2)} {balance?.symbol}
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          variant='text'
          color='inherit'
          className='flex flex-col items-center py-3'
          onClick={() => handleClickCopy(address!)}
        >
          <i className='fa-regular fa-clone' />
          <span>{isCopy ? 'Copied!' : 'Copy address'}</span>
        </Button>
        <Button
          fullWidth
          variant='text'
          color='inherit'
          className='flex flex-col items-center py-3'
          onClick={() => handleClickDisconnect()}
        >
          <i className='fa-solid fa-arrow-right-from-bracket' />
          <span>Disconnect</span>
        </Button>
      </DialogActions>
    </>
  );
};

export default PopupAccount;
