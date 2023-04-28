import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { default as storage } from 'redux-persist/lib/storage';
import { contractSlice } from './contractSlice';
import { themeSlice } from './themeSlice';
import { tokenSlice } from './tokenSlice';

const rootReducer = combineReducers({
  [contractSlice.name]: contractSlice.reducer,
  [tokenSlice.name]: tokenSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
});

const persistedReducer = persistReducer({ key: 'auragi', storage }, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
