import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type AssetState = TokenMap & {
  allTokens: TokenType[];
};

const initialState = {
  allTokens: [] as TokenType[],
} as AssetState;

export const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    saveAssets: (state, { payload }: PayloadAction<AssetState>) => {
      return payload;
    },
  },
});

export const { saveAssets } = assetSlice.actions;
export const assetSelector = ({ asset }: RootState) => asset;
