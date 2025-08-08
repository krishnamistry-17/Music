import React, { useEffect, useState } from "react";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useAuth } from "../Context/AuthContext";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const ChangePassword = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    newPassword,
    setNewPassword,
    currentPassword,
    setCurrentPassword,
    userData,
  } = useAuth();

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("Unauthorized: Please login first");
        return;
      }
      const response = await apiInstance.put(
        apiRoutes.CHANGE_PASSWORD(userData._id),
        {
          oldPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      console.log("response>>>change password :", response);

      setSuccessMessage("Password changed successfully.");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
    setIsClicked(!isClicked);
  };

  return (
    <div className="text-white">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-[#292929] p-5 my-5 sm:mx-0 mx-3"
        >
          <p className="text-white sm:text-[32px] text-[22px] font-Vazirmatn-500 py-2 pl-2">
            Change Password
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="border border-gray-700 p-4 rounded bg-[#1E1E1E]">
              <p>Old Password</p>
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter old password"
                    className="text-[14px] text-white font-Vazirmatn-400 w-full h-[21px] focus:ring-0 focus:outline-none focus:shadow-none"
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

            <div className="border border-gray-700 p-4 mt-2 rounded bg-[#1E1E1E]">
              <p>New Password</p>
              <div className="flex items-center justify-between ">
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="text-[14px] text-white font-Vazirmatn-400 w-full h-[21px] focus:ring-0 focus:outline-none focus:shadow-none"
                  />
                </div>
                <div>
                  {" "}
                  <div
                    className="flex justify-end mr-4"
                    onClick={togglePassword}
                  >
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

            <div className="border border-gray-700 p-4 mt-2 rounded bg-[#1E1E1E]">
              <p>Confirm Password</p>
              <div className="flex justify-between items-center">
                <div>
                  {" "}
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="text-[14px] text-white font-Vazirmatn-400 w-full h-[21px] focus:ring-0 focus:outline-none focus:shadow-none"
                  />
                </div>
                <div>
                  <div
                    className="flex justify-end mr-4"
                    onClick={togglePassword}
                  >
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

            <div className="flex items-center justify-center my-2">
              <button
                className="text-white p-2 bg-[#1E1E1E] rounded px-3"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
