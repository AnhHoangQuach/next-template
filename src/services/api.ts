import { client } from './axios';

const getAllToken = (): Promise<TokenType[]> => client.get(`/api/v1/getAllToken`);
const getAllContract = (): Promise<ContractType[]> => client.get(`/api/v1/contracts`);

const getAddressProof = ({ address }: ByAddress): Promise<any> => client.get(`/api/v1/proof/${address}`);
const getEligibility = ({ address }: ByAddress): Promise<number> => client.get(`/api/v1/airdrop/${address}`);

export const Api = {
  getAllToken,
  getAllContract,

  getAddressProof,
  getEligibility,
};
