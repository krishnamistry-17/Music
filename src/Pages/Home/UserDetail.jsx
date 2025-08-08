import React from "react";
import { useAuth } from "../Context/AuthContext";
import plus from "../../assets/svgs/plus.svg";

const UserDetail = () => {
  const { userData } = useAuth();

  return (
    <div>
      <div className="sm:flex items-center gap-3 px-4 py-4">
        <div className="bg-[#282828] rounded-full object-cover w-[185px] h-[185px]">
          <div></div>
        </div>
        <div>
          <p className="text-white md:text-[45px] text-[32px] font-Vazirmatn-500 xl:pt-25 md:pt-18 md:pl-0 pt-4 sm:pl-10 pl-3">
            {userData?.name}
          </p>
        </div>
      </div>
      <div className=" border border-gray-700 p-4 roudned bg-[#1E1E1E] mx-3 pl-4 max-w-sm">
        <p className="text-white text-[32px] font-Vazirmatn-500 ">
          User Profile
        </p>
        <div className="flex items-center gap-2">
          <p className="text-white text-[18px] font-Vazirmatn-400 py-2">
            Name:
          </p>
          <p className="text-white text-[18px] font-Vazirmatn-400 py-2">
            {userData?.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-white text-[18px] font-Vazirmatn-400 py-2">
            Email:
          </p>
          <p className="text-white text-[18px] font-Vazirmatn-400 py-2">
            {userData?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
