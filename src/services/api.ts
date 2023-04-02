import { client } from './axios';

const getAllToken = (): Promise<TokenType[]> => client.get(`/api/v1/getAllToken`);
const getAllContract = (): Promise<ContractType[]> => client.get(`/api/v1/contracts`);

const getAddressProof = ({ address }: ByAddress): Promise<any> => client.get(`/api/v1/proof/${address}`);
const getEligibility = ({ address }: ByAddress): Promise<EligibileNumber> => client.get(`/api/v1/airdrop/${address}`);

const fetchAddressVest = ({ address }: ByAddress): Promise<VestType[]> => client.get(`/api/v1/vest/${address}`);
const fetchAddressReward = ({ address, tokenId }: FetchRewardParams): Promise<RewardType[]> =>
  client.get(`/api/v1/reward/${address}/${tokenId}`);

export const Api = {
  getAllToken,
  getAllContract,

  getAddressProof,
  getEligibility,

  fetchAddressVest,
  fetchAddressReward,
};
