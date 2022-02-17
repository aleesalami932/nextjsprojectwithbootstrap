import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  token: { tokenId: "", expirationTime: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, payload: { token; expirationTime }) {
      state.isAuthenticated = true;
      state.token.tokenId = payload.token;
      state.token.expirationTime = payload.expirationTime;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
