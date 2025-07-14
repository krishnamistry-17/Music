import React, { useEffect, useState } from "react";
import newmusic1 from "../../assets/images/newmusic1.png";
import newmusic2 from "../../assets/images/newmusic2.png";
import newmusic3 from "../../assets/images/newmusic3.png";
import newmusic4 from "../../assets/images/newmusic4.png";
import newmusic5 from "../../assets/images/newmusic5.png";
import newmusic6 from "../../assets/images/newmusic6.png";
import plus from "../../assets/svgs/plus.svg";

const MusicVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);


  const data = [
    {
      image: newmusic1,
      para: "Shape Of You",
      head: "Ed Sheeran",
      view: "5M views",
    },
    { image: newmusic2, para: "Roar", head: "Katy Perry", view: "4.6M views" },
    {
      image: newmusic3,
      para: "Shake It Off",
      head: "Taylor Swift",
      view: "4.2M views",
    },
    {
      image: newmusic4,
      para: "Someone Like You",
      head: "Adele",
      view: "3M views",
    },
    {
      image: newmusic5,
      para: "New Rules",
      head: "Dualipa",
      view: "3.7M views",
    },
    {
      image: newmusic6,
      para: "Waka Waka",
      head: "Shakira",
      view: "3.5M views",
    },
    {
      image: newmusic3,
      para: "Shake It Off",
      head: "Taylor Swift",
      view: "4.2M views",
    },
    { image: newmusic2, para: "Roar", head: "Katy Perry", view: "4.6M views" },
    {
      image: newmusic1,
      para: "Shape Of You",
      head: "Ed Sheeran",
      view: "5M views",
    },
  ];
  const data3 = [
    {
      image: newmusic1,
      para: "Shape Of You",
      head: "Ed Sheeran",
      view: "5M views",
    },
    { image: newmusic2, para: "Roar", head: "Katy Perry", view: "4.6M views" },
    {
      image: newmusic6,
      para: "Waka Waka",
      head: "Shakira",
      view: "3.5M views",
    },
    {
      image: newmusic3,
      para: "Shake It Off",
      head: "Taylor Swift",
      view: "4.2M views",
    },
    {
      image: newmusic4,
      para: "Someone Like You",
      head: "Adele",
      view: "3M views",
    },
    {
      image: newmusic5,
      para: "New Rules",
      head: "Dualipa",
      view: "3.7M views",
    },
    {
      image: newmusic3,
      para: "Shake It Off",
      head: "Taylor Swift",
      view: "4.2M views",
    },
    { image: newmusic2, para: "Roar", head: "Katy Perry", view: "4.6M views" },
    {
      image: newmusic1,
      para: "Shape Of You",
      head: "Ed Sheeran",
      view: "5M views",
    },
  ];

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(6);
      else if (width >= 768) setVisibleCount(4);
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
          Music <span className="text-darkpink">Video</span>
        </h2>
      </div>
      <div className="flex gap-[22px]">
        <div
          className=" hidden md:grid lg:grid-cols-3 grid-cols-2 gap-[36px] overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[302px] h-[238.75px]  rounded-[5px] p-[8px]">
                <div className="">
                  <img src={item.image} alt="a1" className="" />
                  <div>
                    <p className="text-white text-[20px] font-Vazirmatn-600 pt-[4px] ">
                      {item.para}
                    </p>
                    <div className="flex justify-between">
                      <div className="text-white text-[12px] font-Vazirmatn-300 ">
                        {item.head}
                      </div>
                      <div className="text-white text-[12px] font-Vazirmatn-300 ">
                        {item.view}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="pl-[22px] py-[214.25px] cursor-pointer hidden md:block"
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
              <div className="bg-[#1F1F1F] w-[151px] h-[149px] p-[8px] rounded-[5px] ">
                <img
                  src={item.image}
                  alt="a1"
                  className="w-[134px] h-[90px] rounded-[4px]"
                />
                <div>
                  <p className="text-white text-[14px] font-Vazirmatn-500 pt-[4px] ">
                    {item.para}
                  </p>
                  <p className="text-white text-[12px] font-Vazirmatn-300 pt-[8px] ">
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

export default MusicVideo;
