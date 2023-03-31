import { configureStore } from '@reduxjs/toolkit';
import { commentSlice } from './commentSlice';

export const store = configureStore({
  reducer: {
    [commentSlice.name]: commentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
