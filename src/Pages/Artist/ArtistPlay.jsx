import React, { useState } from "react";
import artist1 from "../../assets/images/artist1.png";
import artist2 from "../../assets/images/artist2.png";
import artist3 from "../../assets/images/artist3.png";
import artist4 from "../../assets/images/artist4.png";
import artist5 from "../../assets/images/artist5.png";
import plus from "../../assets/svgs/plus.svg";
import more from "../../assets/svgs/more.svg";

const ArtistPlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const visibleCount = 4;
  const smallCount = 2;
  const mediumcount = 3;

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
  const data1 = [
    { image: artist1, heading: "Full Collection" },
    { image: artist4, heading: "Fan’s Favorite" },
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

  return (
    <>
      <div className="lg:block hidden">
        <h2 className="text-[32px] text-white font-bold">
          Artist’s <span className="text-[#EE10B0]">Playlist</span>
        </h2>
        <div className="grid grid-cols-5 pt-5 gap-6 overflow-x-auto">
          {(isOpen ? data : data.slice(0, visibleCount)).map((item, index) => (
            <div key={index}>
              <div className="bg-[#1F1F1F] w-[174.4px] h-[195px] ">
                <div className="">
                  <img src={item.image} alt="a1" />
                  <div className="pt-[12px] pl-2">
                    <h2 className="text-white text-[16px]">{item.heading}</h2>
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

      {/* <div className="hidden md:block lg:hidden">
        <h2 className="text-[32px] text-white font-bold pl-4 pt-5">
          Artist’s <span className="text-[#EE10B0]">Playlist</span>
        </h2>
        <div className="flex pt-5 gap-6 px-4 overflow-x-auto">
          {data1.map((item, index) => (
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
          <div className="pl-[24px] py-[64px]">
            <div className="h-[62px] w-[62px] rounded-[31px] bg-[#1E1E1E]">
              <img src={plus} alt="pls" className="p-[19px]" />
            </div>
            <p className="text-white text-[16px] font-medium pt-1">View All</p>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between pt-5">
          <div>
            <h2 className="text-[26px] text-white font-bold pl-4 ">
              Artist’s <span className="text-[#EE10B0]">Playlist</span>
            </h2>
          </div>
          <div className="flex gap-2.5 pt-3">
            <div>
              <h2 className="text-[#0E9EEF] text-[16px] font-semibold">
                View All
              </h2>
            </div>
            <div>
              <img src={more} alt="m" className="w-4 h-4 mt-1" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {data3.map((item, index) => (
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
      </div> */}
    </>
  );
};

export default ArtistPlay;
