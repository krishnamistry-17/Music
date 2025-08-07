// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isLoggedIn: false,
//   isGoogleLogin: false,
//   token: null,
//   userProfile: null, // { name, email, image }
//   userData: null, // Full response from backend
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       const { token, profile, isGoogle, fullData } = action.payload;
//       state.token = token;
//       state.userProfile = profile;
//       state.userData = fullData;
//       state.isLoggedIn = true;
//       state.isGoogleLogin = isGoogle;

//       // Save to localStorage
//       localStorage.setItem("accessToken", token);
//       localStorage.setItem("loginMethod", isGoogle ? "google" : "email");
//       localStorage.setItem("userProfile", JSON.stringify(profile));
//       localStorage.setItem("userData", JSON.stringify(fullData));
//     },
//     logout: (state) => {
//       state.token = null;
//       state.userProfile = null;
//       state.userData = null;
//       state.isLoggedIn = false;
//       state.isGoogleLogin = false;

//       // Remove from localStorage
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("loginMethod");
//       localStorage.removeItem("userProfile");
//       localStorage.removeItem("userData");
//     },
//     loadFromStorage: (state) => {
//       const token = localStorage.getItem("accessToken");
//       const loginMethod = localStorage.getItem("loginMethod");
//       const profile = localStorage.getItem("userProfile");
//       const userData = localStorage.getItem("userData");

//       if (token && loginMethod && profile && userData) {
//         state.token = token;
//         state.userProfile = JSON.parse(profile);
//         state.userData = JSON.parse(userData);
//         state.isLoggedIn = true;
//         state.isGoogleLogin = loginMethod === "google";
//       }
//     },
//   },
// });

// export const { login, logout, loadFromStorage } = authSlice.actions;
// export default authSlice.reducer;

// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;


// import { useDispatch } from "react-redux";
// import { login } from "../../redux/slices/authSlice";

// const dispatch = useDispatch();

// const handleLogin = async () => {
//   const data = await loginWithEmail(email, password);
//   dispatch(
//     login({
//       token: data.token,
//       profile: { name: data.name, email: data.email },
//       isGoogle: false,
//       fullData: data,
//     })
//   );
// };
// dispatch(
//   login({
//     token: data.token,
//     profile: { name: data.name, email: data.email, image: data.picture },
//     isGoogle: true,
//     fullData: data,
//   })
// );
// import { useSelector } from "react-redux";

// const { isLoggedIn, userProfile, userData } = useSelector(
//   (state) => state.auth
// );
// import React, { useEffect, useState } from "react";
// import passwordp from "../../assets/svgs/password.svg";
// import mail from "../../assets/svgs/mail.svg";
// import google from "../../assets/svgs/google.svg";
// import { FaEyeSlash, FaEye } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";
// import { useGoogleLogin } from "@react-oauth/google";
// import { loginWithEmail } from "../../service/authService";
// import apiInstance from "../../../utils/axios";
// import { apiRoutes } from "../Component/Constants/apiRoutes";
// import CryptoJS from "crypto-js";

// const Login = ({ onForgotPassword }) => {
//   const [isClicked, setIsClicked] = useState(false);
//   const { login, setUserData, setCurrentPassword } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//     setIsClicked(!isClicked);
//   };

//   const decryptUserData = (cipherText, keyHex, ivHex) => {
//     try {
//       const key = CryptoJS.enc.Hex.parse(keyHex);
//       const iv = CryptoJS.enc.Hex.parse(ivHex);

//       const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
//         iv: iv,
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.Pkcs7,
//       });

//       const plainText = decrypted.toString(CryptoJS.enc.Utf8);
//       return JSON.parse(plainText);
//     } catch (error) {
//       console.error("Decryption failed:", error);
//       return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !email.includes("@") || !password) {
//       toast.warn("Please fill all the fields");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await loginWithEmail(email, password);
//       const { encryptedUserData, iv, key, accessToken, refreshToken } = response.data.data;

//       // Decrypt the encrypted user data
//       const decryptedUser = decryptUserData(encryptedUserData, key, iv);

//       if (!decryptedUser) throw new Error("Decryption failed");

//       // Auth & Context updates
//       login(accessToken, { name: decryptedUser.name, email: decryptedUser.email }, false, decryptedUser);
//       setUserData(decryptedUser);
//       setCurrentPassword(password);

//       // Save to localStorage
//       localStorage.setItem("user", JSON.stringify(decryptedUser));
//       localStorage.setItem("accessToken", accessToken);
//       localStorage.setItem("refreshToken", refreshToken);

//       toast.success("Login Successful");
//       navigate("/", { state: { tokenReady: true } });
//     } catch (error) {
//       setError(error.response?.data?.message || "Login Failed");
//       toast.error(error.message || "Login failed");
//     } finally {
//       setLoading(false);
//       setEmail("");
//       setPassword("");
//     }
//   };

//   const loginGoogle = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         const token = tokenResponse.access_token;
//         const response = await apiInstance.post(apiRoutes.GET_VERIFYTOKEN, {
//           access_token: token,
//         });

//         const user = response.data.user;
//         const { name, email, picture } = user;

//         login(token, { name, email, image: picture }, true, user);
//         setUserData(user);

//         localStorage.setItem("accessToken", response.data.accessToken);

//         toast.success("Google Login Success");
//         navigate("/", { state: { tokenReady: true } });
//       } catch (error) {
//         console.error("Google login error:", error.message || error);
//         toast.error("Google login failed");
//       }
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="">
//           <p className="text-white text-[16px] font-Vazirmatn-500">Email</p>
//           <div className="flex w-full h-[40px] border-[2px] rounded-[4px] border-bordercolor mt-[8px] py-[8px] pl-[8px] pr-[4px]">
//             <img src={mail} alt="mail" />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter Your E-Mail"
//               className="opacity-75 pl-[4px] text-[12px] font-Vazirmatn-400 text-white w-full focus:ring-0 focus:outline-none focus:shadow-none"
//             />
//           </div>
//         </div>

//         <div className="pt-[12px]">
//           <p className="text-white text-[16px] font-Vazirmatn-500">Password</p>
//           <div className="flex justify-between w-full h-[40px] border-[2px] rounded-[4px] border-bordercolor mt-[8px] py-[8px]">
//             <div className="flex pl-[8px]">
//               <img src={passwordp} alt="password" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter Your Password"
//                 className="opacity-75 pl-[4px] text-[12px] font-Vazirmatn-400 text-white w-full focus:ring-0 focus:outline-none focus:shadow-none"
//               />
//             </div>
//             <div className="flex justify-end mr-4" onClick={togglePassword}>
//               {isClicked && showPassword ? (
//                 <FaEye className="text-white" />
//               ) : (
//                 <FaEyeSlash className="text-white" />
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="py-[16px]">
//           <div className="w-full bg-darkpink rounded-[4px]">
//             <button
//               className="text-[18px] text-white font-Vazirmatn-500 text-center py-[8px] px-[181.75px]"
//               type="submit"
//             >
//               {loading ? "Loading..." : "Login"}
//             </button>
//           </div>
//         </div>
//       </form>

//       <button
//         className="text-white text-[16px] font-Vazirmatn-500 underline hover:text-darkblue"
//         onClick={onForgotPassword}
//       >
//         Forgot Password
//       </button>

//       <div className="flex items-center justify-center pt-[12px]">
//         <span className="border-t-[1px] block flex-1 border-white"></span>
//         <span className="text-white leading-[3px] block px-5 text-[16px] font-Vazirmatn-500">
//           Or
//         </span>
//         <span className="border-t-[1px] block flex-1 border-white"></span>
//       </div>

//       <div
//         onClick={() => loginGoogle()}
//         className="mt-[20px] flex justify-center items-center w-full py-[7px] border-[2px] rounded-[4px] border-white cursor-pointer"
//       >
//         <img src={google} alt="Google" />
//         <p className="text-[16px] text-white font-Vazirmatn-500 text-justify pl-[6.25px]">
//           Sign in with Google
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
