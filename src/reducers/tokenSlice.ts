import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = [] as TokenType[];

export const tokenSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    saveTokens: (state, { payload }) => {
      return payload;
    },
  },
});

export const { saveTokens } = tokenSlice.actions;
export const tokenSelector = ({ tokens }: RootState) => tokens;
