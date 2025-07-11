import React, { useEffect, useState } from "react";
import fan1 from "../../assets/images/fan1.png";
import fan2 from "../../assets/images/fan2.png";
import fan3 from "../../assets/images/fan1.png";
import fan4 from "../../assets/images/fan4.png";
import plus from "../../assets/svgs/plus.svg";
import more from "../../assets/svgs/more.svg";

const Fans = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const [visibleCount, setVisibleCount] = useState(2); 

  const data = [
    { image: fan1, heading: "50 Cent" },
    { image: fan2, heading: "Snoop Dog" },
    { image: fan3, heading: "Tupac" },
    { image: fan4, heading: "Jay+z" },
    { image: fan2, heading: "Snoop Dog" },
    { image: fan4, heading: "Jay+z" },
  ];

  const data3 = [
    { image: fan1, heading: "50 Cent" },
    { image: fan4, heading: "Jay+z" },
    { image: fan2, heading: "Snoop Dog" },
    { image: fan3, heading: "Tupac" },
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
      <div className="md:block hidden">
        <h2 className="text-[32px] text-white font-Vazirmatn-700 pl-4">
          Eminem Fans <span className="text-darkpink">Also Listen To</span>
        </h2>
        <div
          className=" grid lg:grid-cols-6 md:grid-cols-4 pt-5 gap-[43px] overflow-x-auto pl-4"
          style={{ scrollbarWidth: "none" }}
        >
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index}>
              <div className="  w-[176.4px] h-[222px]">
                <div className="">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[23px] text-center">
                    <h2 className="text-white text-[16px] font-Vazirmatn-500">
                      {item.heading}
                    </h2>
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
        <div className="flex justify-between pt-8">
          <div>
            <h2 className="text-[20px] text-white font-Vazirmatn-600 pl-4 ">
              Eminem Fans <span className="text-darkpink">Also Listen To</span>
            </h2>
          </div>
          
        </div>
        <div
          className="flex gap-3 overflow-x-auto  "
          style={{ scrollbarWidth: "none" }}
        >
          {data3.map((item, index) => (
            <div key={index}>
              <div className=" w-[135.33px] h-[187px] p-2 rounded-[8px]">
                <div className="p-2">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[8px]">
                    <h2 className="text-white text-[14px] font-Vazirmatn-300 pt-[23px] text-center">
                      {item.heading}
                    </h2>
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
