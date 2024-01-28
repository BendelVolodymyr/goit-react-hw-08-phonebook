import { createSlice } from '@reduxjs/toolkit';

const { LogIn, createUser, LogOut, refreshUser } = require('./operations');

const handlePending = (state, { payload }) => {
  state.isRefreshing = true;
  state.errorFulfilled = false;
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
      .addCase(createUser.pending, state => {
        state.errorFulfilled = false;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        // при запиті, якщо вводиш дані які вже присутні в базі даних повертає статус 400 в fulfilled з пустим payload === undefined
        if (payload !== undefined) {
          state.isRefreshing = false;
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        } else {
          state.errorFulfilled = true;
        }
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
        state.errorFulfilled = false;
      })
      .addCase(LogOut.pending, handlePending)
      .addCase(LogOut.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isRefreshing = false;
        state.errorFulfilled = false;
      })
      .addCase(LogOut.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(LogIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorFulfilled = false;
      })
      .addCase(LogIn.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload;
        state.errorFulfilled = true;
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
