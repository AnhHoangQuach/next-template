import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { commentSlice } from './commentSlice';

export const store = configureStore({
  reducer: {
    [commentSlice.name]: commentSlice.reducer,
  },
});

export const wrapper = createWrapper(() => store);

export type RootState = ReturnType<typeof store.getState>;
