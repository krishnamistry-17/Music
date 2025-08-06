import axios from "axios";
import apiInstance from "../../utils/axios";
import { apiRoutes } from "../Pages/Component/Constants/apiRoutes";

// Email/Password Login
export const loginWithEmail = async (email, password) => {
  const loginData = { email, password };
  const response = await apiInstance.post(apiRoutes.GET_LOGIN, loginData);
  console.log("response>>email :", response);

  const accessToken = response.data.data.accessToken;
  localStorage.setItem("accessToken>>>>", accessToken);
  console.log(
    "response.data.data.accessToken :",
    response.data.data.accessToken
  );

  return response.data;
};

//GOogle login
export const loginWithGoogle = async (googleAccessToken) => {
  const response = await axios.post(
    "http://192.168.29.45:5000/api/auth/verify-token",
    {
      access_token: googleAccessToken,
    }
  );
  console.log("response>>>google :", response);

  const accessToken = response.data.data.accessToken;
  localStorage.setItem("accessToken", accessToken);
  console.log("accessToken :", accessToken);

  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("accessToken");
  sessionStorage.clear();
};
