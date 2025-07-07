import React, { useState } from "react";
import fan1 from "../../assets/images/fan1.png";
import fan2 from "../../assets/images/fan2.png";
import fan3 from "../../assets/images/fan1.png";
import fan4 from "../../assets/images/fan4.png";
import plus from "../../assets/svgs/plus.svg";
import more from "../../assets/svgs/more.svg";

const Fans = () => {
  const [isOpen, setIsOpen] = useState(false);
  const visibleCount = 4;
  const smallCount = 2;
  const mediumcount = 3;
  const data = [
    { image: fan1, heading: "50 Cent" },
    { image: fan2, heading: "Snoop Dog" },
    { image: fan3, heading: "Tupac" },
    { image: fan4, heading: "Jay+z" },
    { image: fan2, heading: "Snoop Dog" },
  { image: fan4, heading: "Jay+z" },
  ];
  const data1 = [
    { image: fan1, heading: "50 Cent" },
    { image: fan2, heading: "Snoop Dog" },
    { image: fan3, heading: "Tupac" },
  ];
  const data3 = [
    { image: fan1, heading: "50 Cent" },
    { image: fan2, heading: "Snoop Dog" },
  ];

  return (
    <>
      <div className="lg:block hidden">
        <h2 className="text-[32px] text-white font-bold">
          Eminem Fans <span className="text-[#EE10B0]">Also Listen To</span>
        </h2>
        <div className=" grid grid-cols-5 pt-5 gap-[43px]">
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index}>
              <div className=" w-[200.25px] h-[252px] ">
                <div className="">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[23px] text-center">
                    <h2 className="text-white text-[16px]">{item.heading}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
            className="pl-[24px] py-[64px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="h-[62px] w-[62px] rounded-[31px] bg-[#1E1E1E]">
              <img src={plus} alt="pls" className="p-[19px]" />
            </div>
            <p className="text-white text-[16px] font-medium pt-1">
              {isOpen ? "View Less" : "View More"}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden">
        <h2 className="text-[32px] text-white font-bold pl-4 pt-5">
          Eminem Fans <span className="text-[#EE10B0]">Also Listen To</span>
        </h2>
        <div className="flex pt-5 gap-6 px-4 overflow-x-auto">
          {data1.map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[176.4px] h-[222px] p-2 rounded-[8px]">
                <div className="p-2">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[8px]">
                    <h2 className="text-white text-[16px]">{item.heading}</h2>
                    <p className="text-white text-[16px] pt-[4px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="pl-[24px] py-[64px]">
            <div className="h-[62px] w-[62px] rounded-[31px] bg-[#1E1E1E]">
              <img src={plus} alt="pls" className="p-[19px]" />
            </div>
            <p className="text-white text-[16px] font-medium pt-1">View All</p>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between pt-5">
          <div>
            <h2 className="text-[26px] text-white font-bold pl-4 ">
              Eminem Fans <span className="text-[#EE10B0]">Also Listen To</span>
            </h2>
          </div>
          <div className="flex gap-2.5 pt-3">
            <div>
              <h2 className="text-[#0E9EEF] text-[16px] font-semibold">
                View All
              </h2>
            </div>
            <div>
              <img src={more} alt="m" className="w-4 h-4 mt-1" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {data3.map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[135.33px] h-[174px] p-2 rounded-[8px]">
                <div className="p-2">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[8px]">
                    <h2 className="text-white text-[16px]">{item.heading}</h2>
                    <p className="text-white text-[16px] pt-[4px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fans;
