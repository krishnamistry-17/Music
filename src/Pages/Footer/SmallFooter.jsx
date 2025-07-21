import React, { useState } from "react";
import bhome from "../../assets/svgs/bhome.svg";
import bartist from "../../assets/svgs/artb.svg";
import bdisc from "../../assets/svgs/bdisc.svg";
import albumb from "../../assets/svgs/albumb.svg";
import discb from "../../assets/svgs/discb.svg";
import phome from "../../assets/svgs/phome.svg";
import pdisc from "../../assets/svgs/pdisc.svg";
import palbum from "../../assets/svgs/palbum.svg";
import plib from "../../assets/svgs/plib.svg";
import part from "../../assets/svgs/part.svg";
import { useNavigate } from "react-router-dom";
import AudioMusic from "../Home/AudioMusic";

const SmallFooter = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const navigate = useNavigate();
  const optionData = [
    {
      items: [
        { img: bhome, activeimg: phome, name: "Home" },
        { img: bdisc, activeimg: pdisc, name: "Discover", path: "/discover" },
        { img: albumb, activeimg: palbum, name: "Album", path: "/album" },
        { img: bartist, activeimg: part, name: "Artist", path: "/artist" },
        { img: discb, activeimg: plib, name: "Library", path: "/library" },
      ],
    },
  ];

  return (
    <div>
      <div>
        <AudioMusic />
      </div>
      <div className=" lg:hidden  bg-blackbg">
        {optionData.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex justify-between items-center p-4 "
          >
            {section.items.map((item, index) => {
              const isActive =
                activeIndex === `${sectionIndex}-${index}` ||
                location.pathname.startsWith(item.path);

              return (
                <div
                  key={`${sectionIndex}-${index}`}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => {
                    setActiveIndex(`${sectionIndex}-${index}`);
                    if (item.path) {
                      navigate(item.path);
                    }
                  }}
                >
                  <img
                    src={isActive ? item.activeimg : item.img}
                    alt={item.name}
                    className="w-13 h-10"
                  />
                  <div
                    className={`text-[12px] pt-[13px] ${
                      isActive ? "text-darkpink" : "text-darkblue"
                    }`}
                  >
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallFooter;
