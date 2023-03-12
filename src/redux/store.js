import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { transactionsReducer } from './transactions/transactions-slice';
import { statisticsReducer } from './statistics/statisticsSlice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(authPersistConfig, authSlice);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transactions: transactionsReducer,
    statistics: statisticsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
