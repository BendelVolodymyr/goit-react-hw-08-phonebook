import { createSlice } from '@reduxjs/toolkit';

const { LogIn, createUser, LogOut, refreshUser } = require('./operations');

const handlePending = (state, { payload }) => {
  state.isRefreshing = true;
};

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
      .addCase(createUser.pending, handlePending)
      .addCase(createUser.fulfilled, (state, { payload }) => {
        if (payload !== undefined) {
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
        state.errorFulfilled = true;
        state.error = payload;
      })
      .addCase(LogIn.pending, handlePending)
      .addCase(LogIn.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(LogIn.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(LogOut.pending, handlePending)
      .addCase(LogOut.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(LogOut.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
