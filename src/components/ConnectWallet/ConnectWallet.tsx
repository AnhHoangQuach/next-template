'use client';
import { Button, Dialog } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchBalance } from '@wagmi/core';
import { useState } from 'react';
import { shorten } from 'utils/common';
import { useAccount } from 'wagmi';
import { PopupAccount, PopupConnect } from '.';

const ConnectWallet = () => {
  const { isConnected, address } = useAccount();

  const [openNetwork, setOpenNetwork] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  const { data: balance } = useQuery(['fetchBalance', { address }], () => fetchBalance({ address: address! }), {
    enabled: !!address,
  });

  return (
    <>
      {isConnected ? (
        <Button variant='text' color='inherit' className='shadow-base p-[2px]' onClick={() => setOpenAccount(true)}>
          <span className='px-2 pt-[2px]'>
            {Number(balance?.formatted ?? 0).toFixed(2)} {balance?.symbol}
          </span>
          <span className='bg-black/5 rounded-lg px-[8px] py-[6px] pb-[4px]'>
            {shorten(address)} <i className='fa-solid fa-chevron-down' />
          </span>
        </Button>
      ) : (
        <Button size='large' onClick={() => setOpenNetwork(true)}>
          Connect Wallet
        </Button>
      )}

      <Dialog open={openNetwork} onClose={() => setOpenNetwork(false)}>
        <PopupConnect onClose={() => setOpenNetwork(false)} />
      </Dialog>
      <Dialog open={openAccount} onClose={() => setOpenAccount(false)}>
        <PopupAccount onClose={() => setOpenAccount(false)} />
      </Dialog>
    </>
  );
};

export default ConnectWallet;
