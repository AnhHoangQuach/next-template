import { DialogActions, DialogContent, DialogTitle, List, ListItemButton } from '@mui/material';
import { useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';

const PopupNetwork = ({ onClose }: PopupController) => {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  useEffect(() => {
    if (isConnected) {
      onClose();
    }
  }, [onClose, isConnected]);

  return (
    <>
      <DialogTitle className='text-center'>Connect a Wallet</DialogTitle>
      <DialogContent className='py-0'>
        <List className='flex flex-col gap-1'>
          {connectors.map((connector) => {
            return (
              <ListItemButton
                key={connector.id}
                onClick={() => {
                  connect({ connector });
                }}
                className='flex items-center gap-2 rounded-lg min-h-[48px]'
              >
                <img src={require(`assets/icons/${connector.id}.svg`).default.src} className='rounded' />
                <div className='font-bold'>{connector.name}</div>
              </ListItemButton>
            );
          })}
        </List>
      </DialogContent>
      <DialogActions className='justify-between border-t'>
        <div className='text-sm text-black/60'>New to Ethereum wallets?</div>
        <a
          href='https://ethereum.org/en/wallets/'
          target='_blank'
          className='text-primary-main hover:text-primary-light'
        >
          Learn more
        </a>
      </DialogActions>
    </>
  );
};

export default PopupNetwork;
