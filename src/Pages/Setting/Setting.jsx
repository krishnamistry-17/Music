import React, { useEffect } from "react";
import back from "../../assets/svgs/back.svg";
import { IoIosLogIn } from "react-icons/io";

const Setting = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="  lg:max-w-2xl">
      <div className="p-5">
        <div className="flex items-center gap-2">
          <div>
            <img src={back} alt="back" className="lg:hidden" />
          </div>
          <div>
            <h2 className="text-white text-[34px] font-Vazirmatn-400">
              Settings
            </h2>
          </div>
        </div>
        <div className="flex flex-col py-8 pl-2 gap-4">
          <div>
            <div>
              <p className="text-white text-[16px] font-Vazirmatn-400">
                Account
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <div>
                <p className="text-[#b3b3b3]  text-[13px] font-Vazirmatn-200">
                  User Detail
                </p>
              </div>
              <div>
                <button className="flex justify-end gap-2 py-1.5 text-white border-white border rounded-2xl px-2.5 items-center">
                  <IoIosLogIn />
                  View
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className="text-white text-[16px] font-Vazirmatn-400">
                Langugae
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#b3b3b3]  text-[13px] font-Vazirmatn-200">
                  Choose language
                </p>
              </div>
              <div className="text-[#b3b3b3] text-[13px] font-Vazirmatn-200 bg-blackbg p-3">
                <select>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Gujrati">Gujrati</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <p className="text-white text-[16px] font-Vazirmatn-400">
              Change Password
            </p>
            <p className="text-[#b3b3b3] text-[13px] ">
              change your last password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
