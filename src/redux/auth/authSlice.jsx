const { createSlice } = require('@reduxjs/toolkit/dist');
const { loginApi, fetchCurrentUser, registerApi, resetApi, refreshBalance } = require('./operations');

const handlePending = state => {
  state.registerUser = false;
    state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoggedIn = false;
  state.registerUser = false;
  state.isFetchingCurrentUser = false
};

const auth = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    isLoggedIn: false,
    token: null,
    error: null,
    balance: 0,
    registerUser: false,
    isFetchingCurrentUser: false
  },
  extraReducers: {
    [loginApi.pending]: handlePending,
    [loginApi.rejected]: handleRejected,
    [loginApi.fulfilled](state, action) {
      state.username = action.payload.user.username;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.balance = action.payload.user.balance;
      state.error = null;
    },
    [registerApi.pending]: handlePending,
    [registerApi.rejected]: handleRejected,
    [registerApi.fulfilled](state, action) {
      state.username = action.payload.user.username;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.balance = action.payload.user.balance;
      state.error = null;
    },
    [resetApi.pending]: handlePending,
    [resetApi.rejected]: handleRejected,
    [resetApi.fulfilled](state, action) {
        state.username = '';
        state.token = null;
        state.isLoggedIn = false;
        state.balance = 0;
        state.error = null;
    },
    [fetchCurrentUser.pending](state, action) {
      state.registerUser = false;
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = true;
  },
    [fetchCurrentUser.rejected]: handleRejected,
    [fetchCurrentUser.fulfilled](state, action) {
        state.username = action.payload.username;
        state.isLoggedIn = true;
        state.balance = action.payload.balance;
        state.error = null;
        state.isFetchingCurrentUser = false;
    },
    [refreshBalance.fulfilled](state, action) {
        state.balance = action.payload;
    },

  },
});

export const authSlice = auth.reducer;
