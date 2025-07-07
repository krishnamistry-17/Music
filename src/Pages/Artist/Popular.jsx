import React, { useState } from "react";
import art1 from "../../assets/images/art1.jpg";
import art2 from "../../assets/images/art2.jpg";
import art3 from "../../assets/images/art3.jpg";
import art4 from "../../assets/images/art4.jpg";
import art5 from "../../assets/images/art5.jpg";
import pfav from "../../assets/svgs/pfav.svg";
import option from "../../assets/svgs/option.svg";
const Popular = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [lastindex, setLastIndex] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [showreadMore, setShowReadMore] = useState(false);

  const data1 = [
    {
      id: 0,
      image: art1,
      head: "Without Me",
      para: "Eminem",
      rdate: "May 15, 2002",
      played: "21,215,618",
      fimg: pfav,
      ptime: "4:50",
      oimage: option,
    },
    {
      id: 1,
      image: art2,
      head: "mockingbird",
      para: "Eminem",
      rdate: "Apr 25, 2005",
      played: "19,856,112",
      fimg: pfav,
      ptime: "4:10",
      oimage: option,
    },
    {
      id: 2,
      image: art3,
      head: "The Real Slim Sha..",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "16,564,223",
      fimg: pfav,
      ptime: "4:44",
      oimage: option,
    },
    {
      id: 3,
      image: art4,
      head: "Lose Yourself",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "16,240,390",
      fimg: pfav,
      ptime: "5:22",
      oimage: option,
    },
    {
      id: 4,
      image: art5,
      head: "Godzila",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "14,367,500",
      fimg: pfav,
      ptime: "3:30",
      oimage: option,
    },
  ];
  const data2 = [
    {
      id: 5,
      image: art4,
      head: "Lose Yourself",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "16,240,390",
      fimg: pfav,
      ptime: "5:22",
      oimage: option,
    },
    {
      id: 6,
      image: art1,
      head: "Without Me",
      para: "Eminem",
      rdate: "May 15, 2002",
      played: "21,215,618",
      fimg: pfav,
      ptime: "4:50",
      oimage: option,
    },

    {
      id: 7,
      image: art3,
      head: "The Real Slim Sha..",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "16,564,223",
      fimg: pfav,
      ptime: "4:44",
      oimage: option,
    },

    {
      id: 8,
      image: art5,
      head: "Godzila",
      para: "Eminem",
      rdate: "Nov 30, 2023",
      played: "14,367,500",
      fimg: pfav,
      ptime: "3:30",
      oimage: option,
    },
    {
      id: 9,
      image: art2,
      head: "mockingbird",
      para: "Eminem",
      rdate: "Apr 25, 2005",
      played: "19,856,112",
      fimg: pfav,
      ptime: "4:10",
      oimage: option,
    },
  ];

  return (
    <div>
      <h2 className="text-white text-[40px] font-extrabold">Popular</h2>
      <div className="flex justify-between items-end px-8">
        <div>
          <p></p>
        </div>
        <div>
          <p className="text-[20px] text-white">Relase Date</p>
        </div>
        <div>
          <p className="text-[20px] text-white">Played</p>
        </div>
        <div>
          <p className="text-[20px] text-white ">Time</p>
        </div>
      </div>
      <div className=" flex pt-[15px]">
        <div className=" flex flex-col items-center mt-4 mr-4">
          {data1.map((_, index) => (
            <p key={index} className="text-[24px] text-white py-[20px]">
              {index + 1}
            </p>
          ))}
        </div>
        <div>
          {data1.map((item, index) => (
            <div key={index} className="pt-[15px]">
              <div
                onClick={() => setActiveIndex(index)}
                className="grid grid-cols-4 xl:gap-20 gap-5 rounded-md justify-between items-center bg-[#1E1E1E] pr-2 "
              >
                <div className="flex">
                  <img
                    src={item.image}
                    alt="m1"
                    className="w-[60px] h-[60px] rounded-[5px] border"
                  />
                  <div className="pl-[23px] ">
                    <p className="text-white text-[20px] pt-1">{item.head}</p>
                    <p className="text-white text-[12px] pt-0.5">{item.para}</p>
                  </div>
                </div>
                <div>
                  <p className="text-white text-[16px]">{item.rdate}</p>
                </div>
                <div>
                  <p className="text-white text-[16px] pl-22">{item.played}</p>
                </div>
                <div className="flex justify-end gap-2.5">
                  <img src={item.fimg} alt="pf" />
                  <p className="text-white text-[16px]">{item.ptime}</p>
                  <img src={item.oimage} alt="op" />
                </div>
              </div>
            </div>
          ))}

          {isOpen && (
            <div className="flex">
              <div className=" flex flex-col items-center mt-4 mr-4 -ml-8">
                {data2.map((_, index) => (
                  <p key={index} className="text-[24px] text-white py-[20px]">
                    {lastindex + 1 + index}
                  </p>
                ))}
              </div>
              <div>
                {data2.map((item, index) => (
                  <div key={index} className="pt-[15px]">
                    <div
                      onClick={() => setActiveIndex(index)}
                      className="grid grid-cols-4 xl:gap-20 gap-5 rounded-md justify-between items-center bg-[#1E1E1E] pr-2 "
                    >
                      <div className="flex">
                        <img
                          src={item.image}
                          alt="m1"
                          className="w-[60px] h-[60px] rounded-[5px] border"
                        />
                        <div className="pl-[23px] ">
                          <p className="text-white text-[20px] pt-1">
                            {item.head}
                          </p>
                          <p className="text-white text-[12px] pt-0.5">
                            {item.para}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-white text-[16px]">{item.rdate}</p>
                      </div>
                      <div>
                        <p className="text-white text-[16px] pl-22">
                          {item.played}
                        </p>
                      </div>
                      <div className="flex justify-end gap-2.5">
                        <img src={item.fimg} alt="pf" />
                        <p className="text-white text-[16px]">{item.ptime}</p>
                        <img src={item.oimage} alt="op" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex justify-center items-center pt-4">
            <button
              className="text-[14px] px-4 py-2 text-white bg-[#EE10B0] rounded-[4px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
