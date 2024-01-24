import { createSlice } from '@reduxjs/toolkit';

const { LogIn, createUser, LogOut, refreshUser } = require('./operations');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isRefreshing: false,
    isLoggedIn: false,
    error: null,
    errorFulfilled: false,
  },

  extraReducers: builder => {
    builder
      .addCase(createUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        if (payload !== undefined) {
          console.log('authSlice/reg:', payload);
          state.isRefreshing = false;
          state.user = payload.user;
          state.token = payload.token;
        } else {
          state.isRefreshing = false;
          state.errorFulfilled = true;
        }
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
        state.errorFulfilled = true;
      })
      .addCase(LogIn.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(LogIn.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        console.log('authSlice/log:', payload);
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(LogIn.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(LogOut.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(LogOut.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(LogOut.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
