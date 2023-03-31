import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createClient } from 'wagmi';
import { arbitrum, mainnet, polygon, bscTestnet } from 'wagmi/chains';

const chains = [bscTestnet, arbitrum, mainnet, polygon];
const projectId = 'b39715e5520acd1ede1fa42d41dea6c9';

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
