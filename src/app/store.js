import { configureStore } from '@reduxjs/toolkit';
import stocksSlice from './stocksSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    stocks: stocksSlice,
  },
});
