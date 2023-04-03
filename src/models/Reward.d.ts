type RewardFixedType = 'BribeReward' | 'FeeReward' | 'RebaseAmount' | 'EmissionReward' | 'LiquidityReward';

type RewardType = {
  key: string;
  type: RewardFixedType;
  name: string;
  symbol: string;

  reward0: number;
  reward1: number;
  token0Reward: TokenRewardType;
  token1Reward?: TokenRewardType;
  optionalTokensReward?: TokenRewardType[];

  token0InPool: TokenRewardType;
  token1InPool: TokenRewardType;
  token0AmountInPool: number;
  token1AmountInPool: number;

  internalBribeAddress: Address;
  wrappedExternalBribe: Address;
  gaugeAddress: Address;
  pairAddress: Address;
};

type FetchRewardParams = {
  address: Address;
  tokenId: number;
};
