type EligibileNumber = number;

type TokenType = {
  name: string;
  symbol: string;
  logoURI: string;
  address: Address;
  decimals: number;
};

type TokenRewardType = TokenType & {
  price: number;
};

type ContractName = 'AGI' | 'Merkleclaim';

type ContractType = {
  name: string;
  address: Address;
};

type ContractMap = Record<ContractName, Address>;
