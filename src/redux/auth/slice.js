import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        (state.user = {
          name: null,
          email: null,
        }),
          (state.token = null);
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.loading = false;
        state.error = true;
        (state.user = {
          name: null,
          email: null,
        }),
          (state.token = null);
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
        state.isRefreshing = true;
        state.error = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.isRefreshing = false;
      }),
});

export default authSlice.reducer;
