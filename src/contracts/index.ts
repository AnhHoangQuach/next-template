import Web3 from 'web3';
import BoxAbi from './abis/Boxes.json';

export const web3 = new Web3(Web3.givenProvider);

export { BoxAbi };
