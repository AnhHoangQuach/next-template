import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { default as storage } from 'redux-persist/lib/storage';
import { assetSlice } from './assetSlice';
import { contractSlice } from './contractSlice';
import { themeSlice } from './themeSlice';

const rootReducer = combineReducers({
  [assetSlice.name]: assetSlice.reducer,
  [contractSlice.name]: contractSlice.reducer,
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
