import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import passwordp from "../../assets/svgs/password.svg";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleReset = async () => {
      if (!password && !confirmPassword) {
        toast.warn("Please fill all details");
      }
      if (password !== confirmPassword) {
        toast.error("Password do not match!");
      }
    };
  });

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[476.5px] rounded-[12px] bg-bgpink">
          <div className="py-[16px] px-[25px]">
            <div className="flex gap-2 items-center mb-4">
              <IoIosArrowBack />
              <p className="text-white">Reset Password</p>
            </div>
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
                  placeholder="Enter Your Password"
                  className=" opacity-75 pl-[4px] text-[12px] font-Vazirmatn-400 text-white w-full
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

            <div className="py-[16px]">
              <div className="w-full bg-darkpink rounded-[4px]">
                <button
                  className="text-[18px] text-white font-Vazirmatn-500 text-center py-[8px] px-[181.75px]"
                  type="submit"
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
