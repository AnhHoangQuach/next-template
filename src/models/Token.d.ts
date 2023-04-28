type TokenType = {
  name: string;
  symbol: string;
  logoURI: string;
  address: Address;
  decimals: number;
};

type TokenRewardType = TokenType & {
  optionalValue?: number;
  price: number;
};

type ContractName =
  | 'AGI'
  | 'PairFactory'
  | 'Router'
  | 'SwapLibrary'
  | 'GaugeFactory'
  | 'VeArtProxy'
  | 'VotingEscrow'
  | 'BribeFactory'
  | 'Voter'
  | 'RewardsDistributor'
  | 'Minter'
  | 'WrappedExternalBribeFactory'
  | 'Merkleclaim';

type ContractType = {
  name: string;
  address: Address;
};

type ContractMap = Record<ContractName, Address>;
