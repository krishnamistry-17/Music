import React, { useState } from "react";
import search from "../../assets/svgs/bsearch.svg";
import Menu from "../SideBar/Menu";

const SmallSide = () => {
  return (
    <>
      <div>
        <div className=" flex justify-between items-center px-4 py-2   bg-blackbg">
          <img
            src={search}
            alt="back"
            className=" text-bluearrow w-[35px] h-[35px]"
          />
          <h2 className="text-[32px] font-Vazirmatn-800 text-darkpink">
            Dis<span className="text-blue">cover</span>
          </h2>
          <div>
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallSide;
