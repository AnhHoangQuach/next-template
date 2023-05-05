type TokenType = {
  name: string;
  symbol: string;
  logoURI: string;
  address: Address;
  decimals: number;
};

type TokenName = 'AGI' | 'ETH' | 'WETH';

type TokenMap = Record<TokenName, TokenType>;
