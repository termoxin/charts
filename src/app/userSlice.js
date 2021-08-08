import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    isLoggedIn: false,
  };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setLoggedUser: (state, action) => {
        state.userName = action.payload.userName;
        state.isLoggedIn = true;
      },
    },
  });
  
  export const { setLoggedUser } = userSlice.actions;
  
  export const isUserLoggedIn = (state) => state.user.isLoggedIn;
  
  export default userSlice.reducer;
  