import { useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useNetwork } from 'wagmi';

const useWalletStatus = () => {
  const { chain, chains } = useNetwork();
  const { isConnected, address } = useAccount();
  const { openChainModal } = useChainModal();
  const { openConnectModal } = useConnectModal();

  const isWrongStatus = () => {
    if (!isConnected) {
      openConnectModal?.();
      return true;
    }
    const isWrongNetwork = chains.every((item) => item.id !== chain?.id);
    if (isWrongNetwork) {
      openChainModal?.();
      return true;
    }
    return false;
  };

  return { isWrongStatus, address };
};

export default useWalletStatus;
