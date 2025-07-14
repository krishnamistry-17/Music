import React, { useState } from "react";
import user from "../../assets/svgs/user.svg";
import password from "../../assets/svgs/password.svg";
import mail from "../../assets/svgs/mail.svg";
import google from "../../assets/svgs/google.svg";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Platform = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className="flex">
        <div className="py-[93px] pr-[115px]">
          <p className="text-white text-[40px] font-Vazirmatn-900">
            Join Our Platform
          </p>
          <p className="text-white text-[20px] font-Vazirmatn-400 text-justify w-[476.5px]">
            You can be one of the <span className="text-darkpink">members</span>{" "}
            of our platform by just adding some necessarily information. if you
            already have an account on our website, you can just hit the{" "}
            <span className="text-darkblue">Login button.</span>
          </p>
        </div>
        <div className="w-[476.5px] rounded-[12px] bg-bgpink">
          <div className="py-[16px] px-[25px]">
            <div>
              <div className="flex justify-center items-center">
                <div>
                  <button className="text-[24px] text-darkpink font-Vazirmatn-700 text-center border-b-[3px] border-darkpink">
                    Sign Up
                  </button>
                </div>
                <div className="pl-[16px]">
                  <button className="text-[20px] text-lightestpink font-Vazirmatn-600 py-[5px]">
                    Login
                  </button>
                </div>
              </div>
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
                      placeholder="Enter Your Name"
                      className=" opacity-75 pl-[4px] text-[10px] font-Vazirmatn-400 text-white
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
                      placeholder="Enter Your E-Mail"
                      className=" opacity-75 pl-[4px] text-[10px] font-Vazirmatn-400 text-white
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
                    <img src={password} alt="password" />
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      className=" opacity-75 pl-[4px] text-[10px] font-Vazirmatn-400 text-white
                      focus:ring-0 focus:outline-none focus:shadow-none
                     "
                    />
                  </div>
                  <div
                    className="flex justify-end mr-4"
                    onClick={() => setIsClicked(!isClicked)}
                  >
                    {isClicked ? (
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
                <button className="text-[18px] text-white font-Vazirmatn-500 text-center py-[8px] px-[181.75px]">
                  Sign Up
                </button>
              </div>

              <div className="flex items-center justify-center pt-[18px]">
                <span className="border-t-[1px] block flex-1 border-white"></span>
                <span className="text-white leading-[3px] block px-5 text-[16px] font-Vazirmatn-500">
                  Or
                </span>
                <span className="border-t-[1px] block flex-1 border-white"></span>
              </div>
              <div className="mt-[20px] flex justify-center items-center w-full py-[7px] border-[2px] rounded-[4px] border-white ">
                <img src={google} alt="ggle" />
                <p className="text-[16px] text-white font-Vazirmatn-500 text-justify pl-[6.25px]">
                  Sign Up With Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
