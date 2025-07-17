import React, { useEffect, useState } from "react";
import user from "../../assets/svgs/user.svg";
import passwordp from "../../assets/svgs/password.svg";
import mail from "../../assets/svgs/mail.svg";
import google from "../../assets/svgs/google.svg";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useDispatch } from "react-redux";
import { getLogin, getSignUp } from "../Redux/Action/action";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = ({ onSuccess }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
    setIsClicked(!isClicked);
  };

  const dispatch = useDispatch();

  const notify = () =>
    toast.success("SignUp successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.warn("Please fill all fields");
      return;
    }

    setLoading(false);
    setError(null);

    try {
      const signupData = {
        name: name,
        email: email,
        password: password,
        role: "user",
      };
      console.log("signupData  :", signupData);
      const response = await apiInstance.post(apiRoutes.GET_SIGNUP, signupData);
      setData(response.data);
      dispatch(getSignUp(response.data));

      if (response.status === 200) {
        notify();
      }
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  const signup = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfoRes = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const googleUser = userInfoRes.data;
        console.log("Google user data:", googleUser);

        const response = await apiInstance.post(apiRoutes.SIGNUP, {
          email: googleUser.email,
          name: googleUser.name,
          role: "user",
          isGoogleLogin: true,
          password: "GOOGLE_SIGNUP_PLACEHOLDER", //option
        });

        if (response.status === 200 || response.status === 201) {
          localStorage.setItem("accessToken", response.data.token);
          dispatch(getLogin(response.data));
          toast.success("Signed up with Google successfully!");
          navigate("/album");
        }
      } catch (err) {
        console.error("Google signup error:", err);
        const errorMessage =
          err.response?.data?.message || "Google signup failed";
        toast.error(errorMessage);
      }
    },
    onError: () => {
      toast.error("Google sign-up failed");
    },
  });

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="flex gap-[12px] pt-[12px]">
              <div>
                <p className="text-white text-[16px] font-Vazirmatn-500">
                  Name
                </p>
                <div
                  className="flex w-[207.25px] h-[40px] border-[2px] rounded-[4px]
                     border-bordercolor mt-[8px] py-[8px] pl-[8px] pr-[4px]"
                >
                  <img src={user} alt="user" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"
                    className=" opacity-75 pl-[4px] text-[12px] font-Vazirmatn-400 text-white
                      focus:ring-0 focus:outline-none focus:shadow-none
                     "
                  />
                </div>
              </div>
              <div>
                <p className="text-white text-[16px] font-Vazirmatn-500">
                  Email
                </p>
                <div
                  className="flex w-[207.25px] h-[40px] border-[2px] rounded-[4px]
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
          </div>

          <div className="py-[16px]">
            <div className="w-full bg-darkpink rounded-[4px]">
              <button
                className="text-[18px] text-white font-Vazirmatn-500 text-center py-[8px] px-[181.75px]"
                type="submit"
              >
                {loading ? "Loading" : " Sign Up"}
              </button>
            </div>
            <div className="flex items-center justify-center pt-[18px]">
              <span className="border-t-[1px] block flex-1 border-white"></span>
              <span className="text-white leading-[3px] block px-5 text-[16px] font-Vazirmatn-500">
                Or
              </span>
              <span className="border-t-[1px] block flex-1 border-white"></span>
            </div>
            <div
              onClick={() => signup()}
              className="mt-[20px] flex justify-center items-center w-full py-[7px] border-[2px] rounded-[4px] border-white "
            >
              <img src={google} alt="ggle" />
              <p className="text-[16px] text-white font-Vazirmatn-500 text-justify pl-[6.25px] pt-1.5">
                Sign Up With Google
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
