import { ethers } from 'ethers';

export const shorten = (address, head = 4, tail = 4) => {
  if (!ethers.utils.isAddress(address)) return address;
  return address.slice(0, head) + '...' + address.slice(address.length - tail);
};
