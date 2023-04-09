import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getUserInfo } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const pendingReducer = state => {
  state.isRefreshing = true;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder =>
    builder
      // REGISTER
      .addCase(register.pending, pendingReducer)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      // LOGIN
      .addCase(logIn.pending, pendingReducer)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      // LOGOUT
      .addCase(logOut.pending, pendingReducer)
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })

      // GETUSERINFO
      .addCase(getUserInfo.pending, pendingReducer)
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getUserInfo.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const userReducer = userSlice.reducer;
