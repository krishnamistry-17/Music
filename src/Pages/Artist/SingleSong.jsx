import React, { useEffect, useState } from "react";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import s5 from "../../assets/images/s5.png";
import plus from "../../assets/svgs/plus.svg";
import more from "../../assets/svgs/more.svg";

const SingleSong = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [visibleCount, setVisibleCount] = useState(2);
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
 
  const data3 = [
    { image: s1, heading: "Lace It", para: "2023" },
    { image: s4, heading: "911", para: "2022" },
    { image: s5, heading: "Killshot", para: "1999" },
    { image: s2, heading: "Releast", para: "2023" },
    { image: s3, heading: "From The D 2 Th...", para: "2023" },
  ];
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(5); 
      else if (width >= 768) setVisibleCount(3);
      else setVisibleCount(2); 
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <>
      

      <div className=" md:block hidden">
        <h2 className="text-[32px] text-white font-Vazirmatn-700 pl-4 pt-5">
          Single <span className="text-darkpink">Songs</span>
        </h2>
        <div
          className="grid lg:grid-cols-6 md:grid-cols-4 pt-5 gap-6  overflow-x-auto pl-4"
          style={{ scrollbarWidth: "none" }}
        >
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[176.4px] h-[222px] p-2 rounded-[8px]">
                <div className="p-2">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[8px]">
                    <h2 className="text-white text-[16px] font-Vazirmatn-500">{item.heading}</h2>
                    <p className="text-white text-[16px] pt-[4px] font-Vazirmatn-300">
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
            <h2 className="text-[20px] text-white font-Vazirmatn-600 pl-4 ">
              Single <span className="text-darkpink">Songs</span>
            </h2>
          </div>
        
        </div>
        <div
          className="flex gap-3 overflow-x-auto pt-5"
          style={{ scrollbarWidth: "none" }}
        >
          {data3.map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[144.33px] h-[194px] p-2 rounded-[8px]">
                <div className="p-2">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[8px]">
                    <h2 className="text-white text-[14px] font-Vazirmatn-500 truncate">
                      {item.heading}
                    </h2>
                    <p className="text-white text-[12px] font-Vazirmatn-300 pt-[4px]">
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
