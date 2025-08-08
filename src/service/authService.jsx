import axios from "axios";
import apiInstance from "../../utils/axios";
import { apiRoutes } from "../Pages/Component/Constants/apiRoutes";

// Email/Password Login
export const loginWithEmail = async (email, password) => {
  const loginData = { email, password };
  const response = await apiInstance.post(apiRoutes.GET_LOGIN, loginData);

  localStorage.setItem("accessToken", response.data.data.accessToken);

  return response.data;
};

//Google login
// export const loginWithGoogle = async (googleAccessToken) => {
//   const response = await axios.post(
//     "http://192.168.29.45:5000/api/auth/verify-token",
//     {
//       access_token: googleAccessToken,
//     }
//   );
//   console.log("response>>>>google :", response);

//   return response.data;
// };

// Logout
export const logout = () => {
  console.log("setvier");
  localStorage.removeItem("accessToken");
};
