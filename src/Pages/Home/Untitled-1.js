import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isGoogleLogin: false,
  token: null,
  userProfile: null, // { name, email, image }
  userData: null, // Full response from backend
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, profile, isGoogle, fullData } = action.payload;
      state.token = token;
      state.userProfile = profile;
      state.userData = fullData;
      state.isLoggedIn = true;
      state.isGoogleLogin = isGoogle;

      // Save to localStorage
      localStorage.setItem("accessToken", token);
      localStorage.setItem("loginMethod", isGoogle ? "google" : "email");
      localStorage.setItem("userProfile", JSON.stringify(profile));
      localStorage.setItem("userData", JSON.stringify(fullData));
    },
    logout: (state) => {
      state.token = null;
      state.userProfile = null;
      state.userData = null;
      state.isLoggedIn = false;
      state.isGoogleLogin = false;

      // Remove from localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("loginMethod");
      localStorage.removeItem("userProfile");
      localStorage.removeItem("userData");
    },
    loadFromStorage: (state) => {
      const token = localStorage.getItem("accessToken");
      const loginMethod = localStorage.getItem("loginMethod");
      const profile = localStorage.getItem("userProfile");
      const userData = localStorage.getItem("userData");

      if (token && loginMethod && profile && userData) {
        state.token = token;
        state.userProfile = JSON.parse(profile);
        state.userData = JSON.parse(userData);
        state.isLoggedIn = true;
        state.isGoogleLogin = loginMethod === "google";
      }
    },
  },
});

export const { login, logout, loadFromStorage } = authSlice.actions;
export default authSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;


import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

const dispatch = useDispatch();

const handleLogin = async () => {
  const data = await loginWithEmail(email, password);
  dispatch(
    login({
      token: data.token,
      profile: { name: data.name, email: data.email },
      isGoogle: false,
      fullData: data,
    })
  );
};
dispatch(
  login({
    token: data.token,
    profile: { name: data.name, email: data.email, image: data.picture },
    isGoogle: true,
    fullData: data,
  })
);
import { useSelector } from "react-redux";

const { isLoggedIn, userProfile, userData } = useSelector(
  (state) => state.auth
);
