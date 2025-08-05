import React from "react";
import { useAuth } from "../Context/AuthContext";

const UserDetail = () => {
  const { userData } = useAuth();
  console.log("userData :", userData);
  return (
    <div>
      <div className="sm:flex items-center gap-3 px-4 py-4">
        <div className="bg-[#282828] rounded-full object-cover w-[185px] h-[185px]"></div>
        <div>
          <p className="text-white md:text-[45px] text-[32px] font-Vazirmatn-500 xl:pt-25 md:pt-18 md:pl-0 pt-4 sm:pl-10 pl-3">
            {userData?.user?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
