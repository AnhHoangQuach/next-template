type TokenType = {
  name: string;
  symbol: string;
  address: Address;
  logoURI: string;
  decimals: number;
  price: number;
};

type TokenName = 'AGI' | 'ETH' | 'WETH';

type TokenMap = Record<TokenName, TokenType>;
