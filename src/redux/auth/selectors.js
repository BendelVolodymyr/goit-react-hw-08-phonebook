export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectIsLogIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectErrorFulfilled = state => state.auth.errorFulfilled;
