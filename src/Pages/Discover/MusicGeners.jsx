import React, { useEffect, useState } from "react";
import gen1 from "../../assets/images/gen1.png";
import gen2 from "../../assets/images/gen2.png";
import gen3 from "../../assets/images/gen3.png";
import gen4 from "../../assets/images/gen4.png";
import plus from "../../assets/svgs/plus.svg";
const MusicGeners = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  console.log("visibleCount :", visibleCount);

  const data = [
    { image: gen1, para: "Rap Songs" },
    { image: gen2, para: "Pop Songs" },
    { image: gen3, para: "Rock Songs" },
    { image: gen4, para: "Classic Songs" },
    { image: gen3, para: "Rock Songs" },
    { image: gen2, para: "Pop Songs" },
    { image: gen1, para: "Rap Songs" },
  ];
  const data3 = [
    { image: gen1, para: "Rap Songs" },
    { image: gen2, para: "Pop Songs" },
    { image: gen3, para: "Rock Songs" },
    { image: gen4, para: "Classic Songs" },
    { image: gen3, para: "Rock Songs" },
    { image: gen2, para: "Pop Songs" },
    { image: gen1, para: "Rap Songs" },
  ];

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(4);
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
          Music <span className="text-darkpink">Genres</span>
        </h2>
      </div>
      <div
        className=" hidden md:grid lg:grid-cols-5 md:grid-cols-4 gap-[24px] overflow-x-auto "
        style={{ scrollbarWidth: "none" }}
      >
        {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
          <div key={index} className=" ">
            <img src={item.image} alt="img" />
          </div>
        ))}

        <div
          className="pl-[24px] py-[31px] cursor-pointer "
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

      <div className="md:hidden">
        <div
          className=" flex gap-3 overflow-x-auto pt-5"
          style={{ scrollbarWidth: "none" }}
        >
          {data3.map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[150.67px] h-[165px] p-2 rounded-[8px] ">
                <div className="p-2">
                  <img
                    src={item.image}
                    alt="a1"
                    className="w-[124.67px] h-[110px]"
                  />
                  <p className="text-white text-[14px] font-Vazirmatn-500 pt-[8px] pl-[8px]">
                    {item.para}
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

export default MusicGeners;
