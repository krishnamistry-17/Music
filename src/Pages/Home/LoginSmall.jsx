import React, { useEffect, useState } from "react";
import passwordp from "../../assets/svgs/password.svg";
import mail from "../../assets/svgs/mail.svg";
import google from "../../assets/svgs/google.svg";
import smallicon from "../../assets/svgs/smallicon.svg";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getLogin } from "../Redux/Action/action";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import LsSidebar from "../SideBar/LsSideBar";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { loginWithEmail } from "../../service/authService";
import CryptoJS from "crypto-js";

const LoginSmall = ({ onSuccess, onForgotPassword }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { setCurrentPassword, setUserData } = useAuth();
  const { login } = useAuth();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
    setIsClicked(!isClicked);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const decryptUserData = (cipherTextHex, keyHex, ivHex) => {
    try {
      //parse key & iv to hex
      const key = CryptoJS.enc.Hex.parse(keyHex);
      const iv = CryptoJS.enc.Hex.parse(ivHex);
      const cipherParams = CryptoJS.enc.Hex.parse(cipherTextHex);

      //wrap ct to objct
      const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: cipherParams },
        key,
        {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        }
      );

      const plainText = decrypted.toString(CryptoJS.enc.Utf8);

      if (!plainText) {
        console.error("Decryption resulted in empty string");
        return null;
      }

      return JSON.parse(plainText);
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@") || !password) {
      toast.warn("Please fill all the fields");
      return;
    }

    setLoading(true);
    setError(null);

    //email login
    try {
      const response = await loginWithEmail(email, password);

      const { encryptedUserData, iv, key, accessToken, refreshToken } =
        response?.data;

      // Decrypt the encrypted user data
      const decryptedUser = decryptUserData(encryptedUserData, key, iv);

      if (!decryptedUser) throw new Error("Decryption failed");

      // Auth & Context updates
      login(
        accessToken,
        { name: decryptedUser.name, email: decryptedUser.email },
        false,
        decryptedUser
      );
      setUserData(decryptedUser);
      setCurrentPassword(password);

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(decryptedUser));

      toast.success("Login Successful");
      navigate("/", { state: { tokenReady: true } });
    } catch (error) {
      setError(error.response?.data?.message || "Login Failed");
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const token = tokenResponse.access_token;
        const response = await apiInstance.post(apiRoutes.GET_VERIFYTOKEN, {
          access_token: token,
        });

        const user = response.data.user;
        const { name, email, picture } = user;

        login(token, { name, email, image: picture }, true, user);
        setUserData(user);

        localStorage.setItem("accessToken", response.data.accessToken);

        toast.success("Google Login Success");
        navigate("/", { state: { tokenReady: true } });
      } catch (error) {
        console.error("Google login error:", error.message || error);
        toast.error("Google login failed");
      }
    },
  });

  return (
    <div>
      <div className="sticky top-0 z-[5000]">
        <LsSidebar />
      </div>
      <div className="px-[24px] py-[30px] lg:hidden">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="flex justify-center items-center">
              <img src={smallicon} alt="bg" />
            </div>
            <h2
              className="pt-[8px] text-[24px]  font-Vazirmatn-700 text-center
              bg-gradient-to-r from-darkpink to-blue text-transparent bg-clip-text"
            >
              Melodies
            </h2>
          </div>
          <p className="text-white text-[24px] font-Vazirmatn-700 py-[24px]">
            Login To Continue
          </p>
          <div className="">
            <p className="text-white text-[16px] font-Vazirmatn-500">Email</p>
            <div
              className="flex w-full h-[40px] border-[2px] rounded-[4px]
                             border-bordercolor mt-[8px] py-[8px] pl-[8px] pr-[4px]"
            >
              <img src={mail} alt="mail" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your E-Mail"
                className="  pl-[4px] text-[12px] font-Vazirmatn-400 text-white w-full
                              focus:ring-0 focus:outline-none focus:shadow-none
                             "
              />
            </div>
          </div>
          <div className="pt-[12px]">
            <p className="text-white text-[16px] font-Vazirmatn-500">
              Password
            </p>
            <div
              className="flex justify-between w-full h-[40px]  border-[2px] rounded-[4px]
                         border-bordercolor mt-[8px] py-[8px] "
            >
              <div className="flex pl-[8px]">
                <img src={passwordp} alt="password" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter Your Password"
                  className="  pl-[4px] text-[12px] font-Vazirmatn-400 text-white
                          focus:ring-0 focus:outline-none focus:shadow-none w-full
                         "
                />
              </div>
              <div className="flex justify-end mr-4" onClick={togglePassword}>
                {isClicked && showPassword ? (
                  <div>
                    <FaEye className="text-white" />
                  </div>
                ) : (
                  <div>
                    {" "}
                    <FaEyeSlash className="text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="py-[16px]">
            <div className="w-full bg-darkpink rounded-[4px] text-center">
              <button
                className="text-[18px] text-white font-Vazirmatn-500  py-[8px] "
                type="submit"
              >
                {loading ? "Loading" : "Login"}
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={onForgotPassword}
              className="text-white text-[16px] font-Vazirmatn-500 underline hover:text-darkblue"
            >
              Forgot Password
            </button>
          </div>
          <div className="flex items-center justify-center pt-[12px]">
            <span className="border-t-[1px] block flex-1 border-white"></span>
            <span className="text-white leading-[3px] block px-5 text-[16px] font-Vazirmatn-500">
              Or
            </span>
            <span className="border-t-[1px] block flex-1 border-white"></span>
          </div>
          <div
            onClick={() => loginGoogle()}
            className="mt-[20px] flex justify-center items-center w-full py-[7px] border-[2px] rounded-[4px] border-white "
          >
            <img src={google} alt="ggle" />
            <p className="text-[16px] text-white font-Vazirmatn-500 text-justify pl-[6.25px]">
              Sign in With Google
            </p>
          </div>
          <div className="flex py-[24px]">
            <div>
              <p className="text-[20px] font-Vazirmatn-700 text-white">
                Dont Have An Account?
              </p>
            </div>
            <div>
              <a
                href="/signup"
                className="text-[16px] font-Vazirmatn-500 text-white underline hover:text-bluearrow pl-2"
              >
                Signup
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSmall;
