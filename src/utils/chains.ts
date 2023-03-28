import { CHAIN_ID } from 'env';
import { Chain } from 'wagmi';

const arbitrumGoerli: Chain = {
  id: 421613,
  name: 'Arbitrum Goerli',
  network: 'Goerli',
  nativeCurrency: { decimals: 18, name: 'Ethereum', symbol: 'GETH' },
  rpcUrls: {
    public: { http: ['https://arb-goerli.g.alchemy.com/v2/6ZcHn-aRbo-0SAdiXt2ySwHxVBbks5US'] },
    default: { http: ['https://arb-goerli.g.alchemy.com/v2/6ZcHn-aRbo-0SAdiXt2ySwHxVBbks5US'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://goerli-rollup-explorer.arbitrum.io' },
    default: { name: 'SnowTrace', url: 'https://goerli-rollup-explorer.arbitrum.io' },
  },
  contracts: {
    multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11' },
  },
  testnet: true,
};

const arbitrumOne: Chain = {
  id: 42161,
  name: 'Arbitrum',
  network: 'Arbitrum',
  nativeCurrency: { decimals: 18, name: 'Ethereum', symbol: 'ETH' },
  rpcUrls: {
    public: { http: ['https://arb1.arbitrum.io/rpc'] },
    default: { http: ['https://arb1.arbitrum.io/rpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
    multicall3: { address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8' },
  },
};

const chainList = [arbitrumGoerli, arbitrumOne];

export const defaultChain = () => {
  return chainList.find((item) => item.id === +CHAIN_ID!) ?? arbitrumGoerli;
};
