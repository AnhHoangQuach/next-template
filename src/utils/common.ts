import { ethers } from 'ethers';
import { Chain } from 'wagmi';

export const formatNumber = (number?: number, amountSmall?: boolean) => {
  if (amountSmall) {
    if (Number(number) > 0 && Number(number) < 0.01) return `< 0.01`;
  }
  return (number ?? 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const shorten = (address?: Address, head: number = 4, tail: number = 4) => {
  if (!ethers.utils.isAddress(address!)) return address;
  return address.slice(0, head) + '...' + address.slice(address.length - tail);
};

// TODO
export const getBlockExplorerTxHash = (txHash: string, chain?: Chain) => {
  let blockExplorer: string = chain?.blockExplorers?.default.url!;
  if (blockExplorer.endsWith('/')) blockExplorer = blockExplorer.slice(0, -1);
  return blockExplorer + '/tx/' + txHash;
};
