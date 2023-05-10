type ContractType = {
  name: string;
  address: Address;
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

type ContractMap = Record<ContractName, Address>;
