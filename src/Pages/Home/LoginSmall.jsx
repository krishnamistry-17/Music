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

const LoginSmall = ({ onSuccess }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { setIsLoggedIn } = useAuth();

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

  const notify = () =>
    toast.success("Login successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const navigate = useNavigate();

  localStorage.setItem(
    "accessToken",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmRmYTI3NmU5OTIzZjQxYmE3OGFhZiIsImlhdCI6MTc1MjQ4NzM3MiwiZXhwIjoxNzUyNTczNzcyfQ.7FvhITSk-4kN12x0sIXx3Fjl-IPJZhp1EQ1vCBe_qfk"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("Please fill all the fields");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const loginData = { email: email, password: password };
      const response = await apiInstance.post(apiRoutes.GET_LOGIN, loginData);
      setIsLoggedIn(true);
      if (response.status === 200) {
        setData(response.data);
        dispatch(getLogin(response.data));
        notify();
        onSuccess();
        navigate("/album");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // 1. Fetch user profile from Google
        const userInfo = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const googleUser = await userInfo.json();
        console.log("Google user data:", googleUser);

        // 2. Send to your backend for login or signup
        const response = await apiInstance.post(apiRoutes.GET_LOGIN, {
          email: googleUser.email,
          name: googleUser.name,
          role: "user",
          isGoogleLogin: true,
          password: "K@12345" || password,
        });

        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data.token);
          setIsLoggedIn(true);
          dispatch(getLogin(response.data));
          toast.success("Logged in with Google!");
          onSuccess();
          navigate("/album");
        }
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Google login failed";

        if (errorMessage.includes("login using Google")) {
          toast.info(
            "This email was registered with Google. Please use Google login."
          );
        } else {
          toast.error(errorMessage);
        }
      }
    },
    onError: () => {
      toast.error("Google login failed");
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
                className=" opacity-75 pl-[4px] text-[12px] font-Vazirmatn-400 text-white
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
                  className=" opacity-75 pl-[4px] text-[12px] font-Vazirmatn-400 text-white
                          focus:ring-0 focus:outline-none focus:shadow-none
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
            <a className="text-white text-[16px] font-Vazirmatn-500 underline hover:text-darkblue">
              Forgot Password
            </a>
          </div>
          <div className="flex items-center justify-center pt-[12px]">
            <span className="border-t-[1px] block flex-1 border-white"></span>
            <span className="text-white leading-[3px] block px-5 text-[16px] font-Vazirmatn-500">
              Or
            </span>
            <span className="border-t-[1px] block flex-1 border-white"></span>
          </div>
          <div
            onClick={() => login()}
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
                href="/smallsignup"
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
