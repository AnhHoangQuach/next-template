import { ethers } from 'ethers';

export const formatNumber = (number?: number) => {
  return (number ?? 0).toLocaleString();
};

export const shorten = (address?: Address, head: number = 4, tail: number = 4) => {
  if (!ethers.utils.isAddress(address)) return address;
  return address.slice(0, head) + '...' + address.slice(address.length - tail);
};
