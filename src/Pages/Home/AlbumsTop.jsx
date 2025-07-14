import React, { useEffect, useState } from "react";
import top6 from "../../assets/images/top6.png";
import top7 from "../../assets/images/top7.png";
import top8 from "../../assets/images/top8.png";
import top9 from "../../assets/images/top9.png";
import top10 from "../../assets/images/top10.png";
import plus from "../../assets/svgs/plus.svg";

const AlbumsTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  const data = [
    { image: top6, para: "Adele 21", head: "Adele" },
    { image: top7, para: "Scorpion", head: "Drake" },
    { image: top8, para: "Harry’s House", head: "Harry Styles" },
    { image: top9, para: "Born To Die", head: "Lana Del Ray" },
    { image: top10, para: "Beauty Behind the...", head: "The Weekend" },
    { image: top8, para: "Harry’s House", head: "Harry Styles" },
    { image: top7, para: "Scorpion", head: "Drake" },
    { image: top6, para: "Adele 21", head: "Adele" },
  ];
  const data3 = [
    { image: top6, para: "Adele 21", head: "Adele" },
    { image: top7, para: "Scorpion", head: "Drake" },
    { image: top8, para: "Harry’s House", head: "Harry Styles" },
    { image: top9, para: "Born To Die", head: "Lana Del Ray" },
    { image: top10, para: "Beauty Behind the...", head: "The Weekend" },
    { image: top8, para: "Harry’s House", head: "Harry Styles" },
    { image: top7, para: "Scorpion", head: "Drake" },
    { image: top6, para: "Adele 21", head: "Adele" },
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
    <div>
      <div>
        <h2
          className="text-white 
        lg:text-[32px] lg:font-Vazirmatn-700
        text-[20px] font-Vazirmatn-600 py-[10px]
        "
        >
          Top <span className="text-darkpink">Albums</span>
        </h2>
      </div>
      <div>
        <div
          className=" hidden md:grid lg:grid-cols-6 md:grid-cols-4 gap-[24px] overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[174.4px] h-[222px] p-[8px]  rounded-[8px] ">
                <img src={item.image} alt="a1" className="" />
                <p className="text-white text-[16px] font-Vazirmatn-500 pt-[8px] ">
                  {item.para}
                </p>
                <p className="text-white text-[12px] font-Vazirmatn-300 pt-[4px] opacity-80 ">
                  {item.head}
                </p>
              </div>
            </div>
          ))}

          <div
            className="pl-[22px] py-[64px] cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="h-[62px] w-[62px] rounded-[31px] bg-[#1E1E1E] flex items-center justify-center">
              <img src={plus} alt="pls" className="p-[19px]" />
            </div>
            <p className="text-white text-[16px] font-Vazirmatn-500 font-medium pt-1">
              {isOpen ? "View Less" : "View All"}
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div
          className=" flex gap-3 overflow-x-auto pt-5"
          style={{ scrollbarWidth: "none" }}
        >
          {data3.map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[140px] h-[185px]  rounded-[10px] py-[4px] px-[8px]">
                <img src={item.image} alt="a1" className="]" />
                <div>
                  <p className="text-white text-[14px] font-Vazirmatn-500 pt-[8px]">
                    {item.para}
                  </p>
                  <p className="text-white text-[12px] font-Vazirmatn-300 pt-[8px] opacity-80">
                    {item.head}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumsTop;
