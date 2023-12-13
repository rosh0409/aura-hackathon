import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
});
