import React, { useEffect, useState } from "react";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useDispatch } from "react-redux";
import { getForgot } from "../Redux/Action/action";
import { useAuth } from "../Context/AuthContext";
import { IoIosArrowBack } from "react-icons/io";
import mail from "../../assets/svgs/mail.svg";
import { toast } from "react-toastify";

const ForgetPassword = ({ onBackToLogin }) => {
  const { setForgotEmail } = useAuth();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    try {
      const response = await apiInstance.post(apiRoutes.FORGOT_PASSWORD, {
        email: email,
      });
      console.log("response :", response);
      toast.success("Reset link sent to your email");
      setForgotEmail(email);
      dispatch(getForgot(response.data.data));
    } catch (error) {
      console.error("Error in forgot password", error);
      toast.error(error.response?.data?.message || "Failed to send reset link");
    }
  };

  return (
    <div className="px-4 py-4">
      <div className="text-white flex gap-2 items-center mb-4">
        <IoIosArrowBack onClick={onBackToLogin} />
        Forget Password
      </div>

      <p className="text-white text-[16px] font-Vazirmatn-500">Email</p>
      <div className="flex w-full h-[40px] border-[2px] rounded-[4px] border-bordercolor mt-[8px] py-[8px] pl-[8px] pr-[4px]">
        <img src={mail} alt="mail" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your E-Mail"
          className="opacity-75 pl-[4px] text-[12px] font-Vazirmatn-400 text-white w-full focus:ring-0 focus:outline-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-darkpink text-white py-2 rounded-md font-Vazirmatn-600"
      >
        Send Reset Link
      </button>
    </div>
  );
};

export default ForgetPassword;
