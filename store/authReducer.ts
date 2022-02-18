import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { Router } from "next/router";
import { auth } from "../firebase";

//
export async function getStaticProps() {
  const initialToken = localStorage.getItem("token");
  return {
    props: {
      initialToken,
    }, // will be passed to the page component as props
  };
}
const initialAuthState = {
  isAuthenticated: false,
  token: "",
  loading: false,
  error: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, actions) {
      state.isAuthenticated = true;
      state.token = actions.payload;
      localStorage.setItem("token", actions.payload);
    },
    logout(state, actions) {
      state.isAuthenticated = false;
      state.token = actions.payload;
      localStorage.removeItem("token");
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export default authSlice;
