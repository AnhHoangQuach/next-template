type EligibileType = number;

type TokenType = {
  price: number;
  symbol: string;
  name: string;
  logoURI: string;
  address: Address;
  decimals: number;
};

type ContractName = 'AGI' | 'Merkleclaim';

type ContractType = {
  name: string;
  address: Address;
};

type ContractMap = Record<ContractName, Address>;
