import { web3 } from 'contracts';

export const shorten = (address, head = 4, tail = 4) => {
  if (!web3.utils.isAddress(address)) return address;
  return address.slice(0, head) + '...' + address.slice(address.length - tail);
};
