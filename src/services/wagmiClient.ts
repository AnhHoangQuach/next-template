import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { coinbaseWallet, metaMaskWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { ENV } from 'env';
import { configureChains, createClient } from 'wagmi';
import { arbitrum, arbitrumGoerli, bsc, bscTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

export const defaultChains = () => {
  const testnet = [arbitrumGoerli, bscTestnet];
  const mainnet = [arbitrum, bsc];
  const chainList = ENV === 'DEV' ? testnet : mainnet;
  return chainList;
};

const { chains, provider, webSocketProvider } = configureChains([...defaultChains()], [publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      coinbaseWallet({ appName: 'Muragi Finance dApp', chains }),
      walletConnectWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains, wagmiClient };
