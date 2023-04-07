import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getUserInfo } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoading: true,
  isLoggedIn: false,
  isRefreshing: false,
};

const pendingReducer = state => {
  state.error = null;
  state.isLoading = true;
};

const errorReducer = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
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
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.rejected, errorReducer)

      // LOGIN
      .addCase(logIn.pending, pendingReducer)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, errorReducer)

      // LOGOUT
      .addCase(logOut.pending, pendingReducer)
      .addCase(logOut.fulfilled, state => {
        state.status = 'resolved';
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, errorReducer)

      // GETUSERINFO
      .addCase(getUserInfo.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(getUserInfo.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = payload;
      }),
});

export const userReducer = userSlice.reducer;
