import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = [
  {
    comment: 'Gojo looks nice. Excellent work amigo!',
    username: 'Saitama',
  },
  {
    comment: 'Catoru Sensei! Konnichiwa!',
    username: 'Yuji',
  },
];

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addComment } = commentSlice.actions;
export const commentSelector = ({ comments }: RootState) => comments;
