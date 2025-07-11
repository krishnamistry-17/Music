import React, { useEffect, useState } from "react";
import artist1 from "../../assets/images/artist1.png";
import artist2 from "../../assets/images/artist2.png";
import artist3 from "../../assets/images/artist3.png";
import artist4 from "../../assets/images/artist4.png";
import artist5 from "../../assets/images/artist5.png";
import plus from "../../assets/svgs/plus.svg";
import more from "../../assets/svgs/more.svg";

const ArtistPlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [visibleCount, setVisibleCount] = useState(2); 


  const data = [
    { image: artist1, heading: "Full Collection" },
    { image: artist2, heading: "Best Of Eminem" },
    { image: artist3, heading: "Old Songs" },
    { image: artist4, heading: "Fan’s Favorite" },
    { image: artist5, heading: "New Releases" },
    { image: artist5, heading: "New Releases" },
    { image: artist2, heading: "Best Of Eminem" },
    { image: artist3, heading: "Old Songs" },
  ];

  const data3 = [
    { image: artist1, heading: "Full Collection" },
    { image: artist2, heading: "Best Of Eminem" },
    { image: artist4, heading: "Fan’s Favorite" },
    { image: artist5, heading: "New Releases" },
    { image: artist3, heading: "Old Songs" },
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
        <h2 className="text-[32px] text-white font-Vazirmatn-700 pl-4 lg:pt-0 pt-4">
          Artist’s <span className="text-darkpink">Playlist</span>
        </h2>
        <div
          className="grid lg:grid-cols-6 md:grid-cols-4 pt-5 gap-6 overflow-x-auto pl-4"
          style={{ scrollbarWidth: "none" }}
        >
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[174.4px] h-[195px] ">
                <div className="">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[12px] pl-2">
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
        <div className="flex justify-between pt-5">
          <div>
            <h2 className="text-[20px] font-Vazirmatn-600 text-white pl-4 ">
              Top <span className="text-darkpink">Mix’s</span>
            </h2>
          </div>
          {/* <div className="flex gap-2.5 pt-3" onClick={() => setIsOpen(!isOpen)}>
            <div>
              <h2 className="text-[#0E9EEF] text-[12px] font-semibold">
                {isOpen ? "View Less" : "View More"}
              </h2>
            </div>
            <div>
              <img src={more} alt="m" className="w-4 h-4 " />
            </div>
          </div> */}
        </div>
        <div
          className="flex gap-3 overflow-x-auto pt-5"
          style={{ scrollbarWidth: "none" }}
        >
          {data3.map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[148.33px] h-[177px] p-2 rounded-[8px]">
                <div className="p-2">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[8px]">
                    <h2 className="text-white text-[14px] pt-3 font-Vazirmatn-500">
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

export default ArtistPlay;
