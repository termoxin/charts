import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../app/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
