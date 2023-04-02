import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = {} as ContractMap;

export const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    saveContract: (state, { payload }) => {
      return payload;
    },
  },
});

export const { saveContract } = contractSlice.actions;
export const contractSelector = ({ contract }: RootState) => contract;
