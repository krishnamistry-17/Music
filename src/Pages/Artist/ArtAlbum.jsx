import React, { useEffect, useState } from "react";
import album1 from "../../assets/images/album1.png";
import album2 from "../../assets/images/album2.png";
import album3 from "../../assets/images/album3.png";
import album4 from "../../assets/images/album4.png";
import album5 from "../../assets/images/album5.png";
import plus from "../../assets/svgs/plus.svg";
import more from "../../assets/svgs/more.svg";

const ArtAlbum = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [visibleCount, setVisibleCount] = useState(2); 

  const data = [
    { image: album1, heading: "The Eminem Show", para: "2002" },
    { image: album2, heading: "Encore", para: "2004" },
    { image: album3, heading: "Music To Be Mrde...", para: "2020" },
    { image: album4, heading: "Recovery", para: "2010" },
    { image: album5, heading: "Eminem The Slim...", para: "1999" },
    { image: album3, heading: "Music To Be Mrde...", para: "2020" },
    { image: album1, heading: "The Eminem Show", para: "2002" },
    { image: album2, heading: "Encore", para: "2004" },
    { image: album5, heading: "Eminem The Slim...", para: "1999" },
    { image: album4, heading: "Recovery", para: "2010" },
  ];
  const data3 = [
    { image: album1, heading: "Eminem Show", para: "2002" },
    { image: album2, heading: "Encore", para: "2004" },
    { image: album4, heading: "Recovery", para: "2010" },
    { image: album5, heading: "Eminem The Slim...", para: "1999" },
    { image: album3, heading: "Music To Be Mrde...", para: "2020" },
  ];

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(5); // lg
      else if (width >= 768) setVisibleCount(3); // md
      else setVisibleCount(2); // sm
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <>

      <div className=" md:block hidden ">
        <h2 className="text-[32px] text-white font-Vazirmatn-700 pl-4">
          Artist’s <span className="text-darkpink">Albums</span>
        </h2>
        <div
          className=" grid lg:grid-cols-6 md:grid-cols-4  pt-5 gap-6 overflow-x-auto pl-4"
          style={{ scrollbarWidth: "none" }}
        >
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index} className=" ">
              <div className="bg-[#1F1F1F] w-[176.4px] h-[222px] p-2 rounded-[8px]">
                <div className="p-2">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[8px]">
                    <h2 className="text-white text-[16px] font-Vazirmatn-500">
                      {item.heading}
                    </h2>
                    <p className="text-white text-[16px] pt-[4px] font-Vazirmatn-300">
                      {item.para}
                    </p>
                  </div>
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
        <div className="flex justify-between pt-5">
          <div>
            <h2 className="text-[20px] font-Vazirmatn-600 text-white  pl-4 ">
              Artist’s <span className="text-darkpink">Albums</span>
            </h2>
          </div>
  
        </div>
        <div
          className=" flex gap-3 overflow-x-auto pt-5"
          style={{ scrollbarWidth: "none" }}
        >
          {data3.map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[135.33px] h-[194px] p-2 rounded-[8px] ">
                <div className="p-2">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[8px]">
                    <h2 className="text-white text-[14px] font-Vazirmatn-500 ">
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

export default ArtAlbum;
