import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
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
    // Action to add comment
    addComment: (state, action) => {
      return [...state, action.payload];
    },

    // Special reducer for hydrating the state
    extraReducers: {
      // @ts-ignore
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.comments,
        };
      },
    },
  },
});

export const { addComment } = commentSlice.actions;
export const commentSelector = ({ comments }: RootState) => comments;
