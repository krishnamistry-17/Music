import React, { useEffect, useState } from "react";
import song1 from "../../assets/images/song1.png";
import song2 from "../../assets/images/song2.png";
import song3 from "../../assets/images/song3.png";
import song4 from "../../assets/images/song4.png";
import song5 from "../../assets/images/song5.png";
import plus from "../../assets/svgs/plus.svg";

const MoodPlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  console.log("visibleCount :", visibleCount);

  const data = [
    { image: song1, para: "Sad Playlist" },
    { image: song2, para: "Chill Playlist" },
    { image: song3, para: "Workout Playlist" },
    { image: song4, para: "Love Playlist" },
    { image: song5, para: "Happy Playlist" },
    { image: song3, para: "Workout Playlist" },
    { image: song2, para: "Chill Playlist" },
    { image: song1, para: "Sad Playlist" },
  ];
  const data3 = [
    { image: song1, para: "Sad Playlist" },
    { image: song2, para: "Chill Playlist" },
    { image: song3, para: "Workout Playlist" },
    { image: song4, para: "Love Playlist" },
    { image: song5, para: "Happy Playlist" },
    { image: song3, para: "Workout Playlist" },
    { image: song2, para: "Chill Playlist" },
    { image: song1, para: "Sad Playlist" },
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
          Mood <span className="text-darkpink">Playlist</span>
        </h2>
      </div>
      <div>
        <div
          className=" hidden md:grid lg:grid-cols-6 md:grid-cols-4 gap-[24px] overflow-x-auto "
          style={{ scrollbarWidth: "none" }}
        >
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[174.67px] h-[195px]  rounded-[8px] ">
                <div className="">
                  <img
                    src={item.image}
                    alt="a1"
                    className="w-[174.67px] h-[150px]"
                  />
                  <p className="text-white text-[16px] font-Vazirmatn-500 pt-[12px] pl-[4px]">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div
            className="pl-[24px] py-[64px] cursor-pointer "
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
              <div className="bg-[#1F1F1F] w-[150.67px] h-[165px] p-2 rounded-[8px] ">
                <div className="p-2">
                  <img
                    src={item.image}
                    alt="a1"
                    className="w-[124.67px] h-[110px]"
                  />
                  <p className="text-white text-[14px] font-Vazirmatn-500 pt-[14px] pl-[8px]">
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

export default MoodPlay;
