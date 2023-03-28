import { defaultChain } from 'utils/chains';
import { configureChains, createClient } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains([defaultChain()], [publicProvider()]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: 'wagmi' },
    }),
    new WalletConnectConnector({
      chains,
      options: { projectId: 'b39715e5520acd1ede1fa42d41dea6c9' },
    }),
  ],
  provider,
  webSocketProvider,
});

export default wagmiClient;
