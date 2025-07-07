import React, { useState } from "react";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import s5 from "../../assets/images/s5.png";
import plus from "../../assets/svgs/plus.svg";
import more from "../../assets/svgs/more.svg";

const SingleSong = () => {
  const [isOpen, setIsOpen] = useState(false);
  const visibleCount = 5;
  const smallCount = 2;
  const mediumcount = 3;
  const data = [
    { image: s1, heading: "Lace It", para: "2023" },
    { image: s2, heading: "Releast", para: "2023" },
    { image: s3, heading: "From The D 2 Th...", para: "2023" },
    { image: s4, heading: "911", para: "2022" },
    { image: s5, heading: "Killshot", para: "1999" },
    { image: s2, heading: "Releast", para: "2023" },
    { image: s3, heading: "From The D 2 Th...", para: "2023" },
    { image: s1, heading: "Lace It", para: "2023" },
  ];
  const data1 = [
    { image: s1, heading: "Lace It", para: "2023" },
    { image: s4, heading: "911", para: "2022" },
    { image: s5, heading: "Killshot", para: "1999" },
    { image: s2, heading: "Releast", para: "2023" },
    { image: s3, heading: "From The D 2 Th...", para: "2023" },
  ];
  const data3 = [
    { image: s1, heading: "Lace It", para: "2023" },
    { image: s4, heading: "911", para: "2022" },
    { image: s5, heading: "Killshot", para: "1999" },
    { image: s2, heading: "Releast", para: "2023" },
    { image: s3, heading: "From The D 2 Th...", para: "2023" },
  ];
  return (
    <>
      <div className="lg:block hidden">
        <h2 className="text-[32px] text-white font-bold">
          Single <span className="text-[#EE10B0]">Songs</span>
        </h2>
        <div className="grid grid-cols-6 pt-5 gap-6">
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[182.4px] h-[214px] px-[15px] py-[4px] rounded-[8px]">
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
          Artist’s <span className="text-[#EE10B0]">Albums</span>
        </h2>
        <div className="grid grid-cols-4 pt-5 gap-6 px-4 overflow-x-auto">
          {(isOpen ? data1 : data1.slice(0, mediumcount)).map((item, index) => (
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

      <div className="md:hidden">
        <div className="flex justify-between pt-5">
          <div>
            <h2 className="text-[26px] text-white font-bold pl-4 ">
              Artist’s <span className="text-[#EE10B0]">Albums</span>
            </h2>
          </div>
          <div
            className=" grid grid-cols-2 gap-2.5 pt-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div>
              <h2 className="text-[#0E9EEF] text-[16px] font-semibold">
                {isOpen ? "View Less" : "View More"}
              </h2>
            </div>
            <div>
              <img src={more} alt="m" className="w-4 h-4 mt-1" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {(isOpen ? data3 : data3.slice(0, smallCount)).map((item, index) => (
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

export default SingleSong;
