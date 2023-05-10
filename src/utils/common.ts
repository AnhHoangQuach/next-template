import { ethers } from 'ethers';
import { Chain } from 'wagmi';

type Options = {
  digits?: number;
  isSmall?: boolean;
  symbol?: string;
};

export const formatNumber = (value?: number | string, options?: Options) => {
  const { digits = 2, isSmall = false } = options ?? {};
  const number = Number(value) || 0;
  if (isSmall) {
    const minimumValue = 1 * 10 ** -digits;
    if (number > 0 && number < minimumValue) {
      return `< ${minimumValue}`;
    }
  }
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
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
