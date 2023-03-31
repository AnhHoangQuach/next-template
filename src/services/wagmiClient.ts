import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { CHAIN_ID } from 'env';
import { configureChains, createClient } from 'wagmi';
import { arbitrum, arbitrumGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const defaultChain = () => {
  const chainList = [arbitrumGoerli, arbitrum];
  return chainList.find((chain) => chain.id === CHAIN_ID) ?? chainList[0];
};

const { chains, provider, webSocketProvider } = configureChains([defaultChain()], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Auragi Finance dApp',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains, wagmiClient };
