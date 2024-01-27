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
  },

  extraReducers: builder => {
    builder
      .addCase(createUser.pending, handlePending)
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(LogOut.pending, handlePending)
      .addCase(LogOut.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isRefreshing = false;
      })
      .addCase(LogOut.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(LogIn.pending, handlePending)
      .addCase(LogIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(LogIn.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
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
