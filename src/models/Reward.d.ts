type RewardFixedType = 'LiquidityReward' | 'FeeReward';

type RewardType = {
  type: RewardFixedType;
  reward0: number;
  reward1: number;
  token0Reward: TokenRewardType;
  token1Reward: TokenRewardType;
  token0InPool: TokenRewardType;
  token1InPool: TokenRewardType;
  token0AmountInPool: number;
  token1AmountInPool: number;
  name: string;
  symbol: string;
  internalBribeAddress: Address;
  wrappedExternalBribe: Address;
  gaugeAddress: Address;
  pairAddress: Address;
};

type FetchRewardParams = {
  address: Address;
  tokenId: number;
};
