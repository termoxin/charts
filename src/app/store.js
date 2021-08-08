/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
