import axios from "axios";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";

const saveToken = (token) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  }
};

// Email/Password Login
export const loginWithEmail = async (email, password) => {
  const loginData = { email, password };
  const response = await apiInstance.post(apiRoutes.GET_LOGIN, loginData);
  const { token } = response.data;

  saveToken(token);

  return response.data;
};

export const loginWithGoogle = async (googleAccessToken) => {
  const response = await axios.post(
    "http://192.168.29.45:5000/api/auth/verify-token",
    {
      access_token: googleAccessToken,
    }
  );
  const { token } = response.data;

  saveToken(token);

  return response.data;
};

// Logout helper
export const logout = () => {
  localStorage.removeItem("accessToken");
  sessionStorage.clear();
};
