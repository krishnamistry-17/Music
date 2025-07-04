import React, { useState } from "react";
import playmusic from "../../assets/svgs/playmusic.svg";
import pfav from "../../assets/svgs/pfav.svg";
import option from "../../assets/svgs/option.svg";
import music1 from "../../assets/images/music1.jpg";
import music2 from "../../assets/images/music2.jpg";
import music3 from "../../assets/images/music3.png";
import music4 from "../../assets/images/music4.png";
import music5 from "../../assets/images/music5.png";
import music6 from "../../assets/images/music6.jpg";
import music7 from "../../assets/images/music7.png";
import music8 from "../../assets/images/music8.jpg";
import music9 from "../../assets/images/music9.jpg";
import music10 from "../../assets/images/music10.jpg";
import music11 from "../../assets/images/music11.jpg";
import music12 from "../../assets/images/music12.jpg";
import music13 from "../../assets/images/music13.jpg";
import music14 from "../../assets/images/music14.png";
import music15 from "../../assets/images/music15.png";
import music16 from "../../assets/images/music16.jpg";
import music17 from "../../assets/images/music17.png";
import music18 from "../../assets/images/music18.jpg";
import music19 from "../../assets/images/music19.png";
import music20 from "../../assets/images/music20.jpg";

const Song = () => {
  const data = [{ img: playmusic }, { num: 2 }];
  const [activeIndex, setActiveIndex] = useState(0);

  const data1 = [
    {
      id: 0,
      image: music1,
      head: "Sorfcore",
      para: " The neighberhood",
      rdate: "Nov 4, 2023",
      album: " Hard to Imagine Neighbourhood Ever Changing",
      fimg: pfav,
      ptime: "3:26",
      oimage: option,
    },
    {
      id: 1,
      image: music2,
      head: "Skyfall Beats",
      para: " nightmares",
      rdate: "Oct 26, 2023",
      album: "nightmares",
      fimg: pfav,
      ptime: "2:45",
      oimage: option,
    },
    {
      id: 2,
      image: music3,
      head: "Greedy",
      para: " tate mcrae",
      rdate: "Nov 30, 2023",
      album: "Greedy",
      fimg: pfav,
      ptime: "2:11",
      oimage: option,
    },
    {
      id: 3,
      image: music4,
      head: "Lovin On me",
      para: " jack harlow",
      rdate: "Dec 15, 2023",
      album: "Lovin On me",
      fimg: pfav,
      ptime: "2:18",
      oimage: option,
    },
    {
      id: 4,
      image: music5,
      head: "pain the town red",
      para: " Doja Cat",
      rdate: "Dec 29, 2023",
      album: "Paint The Town Red",
      fimg: pfav,
      ptime: "3:51",
      oimage: option,
    },
    {
      id: 5,
      image: music6,
      head: "Dancin On Night",
      para: " Dualipa",
      rdate: "may 27, 2023",
      album: "Dance The Night(From Barbie Movie)",
      fimg: pfav,
      ptime: "2:56",
      oimage: option,
    },
    {
      id: 6,
      image: music7,
      head: "Water",
      para: " Tyla",
      rdate: "Oct 21, 2023",
      album: "Water",
      fimg: pfav,
      ptime: "3:20",
      oimage: option,
    },
    {
      id: 7,
      image: music8,
      head: "Push your limits",
      para: " Brian michael",
      rdate: "Jan 2, 2024",
      album: "Push your limits",
      fimg: pfav,
      ptime: "2:24",
      oimage: option,
    },
    {
      id: 8,
      image: music9,
      head: "Houdini",
      para: " Dualipa",
      rdate: "Dec 12, 2023",
      album: "Houdini",
      fimg: pfav,
      ptime: "3:05",
      oimage: option,
    },
    {
      id: 9,
      image: music10,
      head: "Lala",
      para: " myke towers",
      rdate: "Nov 20, 2023",
      album: "La vida es una",
      fimg: pfav,
      ptime: "3:17",
      oimage: option,
    },
    {
      id: 10,
      image: music11,
      head: "I Wanaa Be Yours",
      para: "arctic monkeys",
      rdate: "Sep 9, 2023",
      album: "AM",
      fimg: pfav,
      ptime: "3:03",
      oimage: option,
    },
    {
      id: 11,
      image: music12,
      head: "Paradise",
      para: "braaheim",
      rdate: "Jul 5, 2023",
      album: "Paradise",
      fimg: pfav,
      ptime: "2:30",
      oimage: option,
    },
    {
      id: 12,
      image: music13,
      head: "As It Was",
      para: " Harry Styles",
      rdate: "Sep 14, 2022",
      album: "As It Was",
      fimg: pfav,
      ptime: "2:47",
      oimage: option,
    },
    {
      id: 13,
      image: music14,
      head: "Another Love",
      para: " Tom Odell",
      rdate: "Dec 19, 2013",
      album: "Another Love",
      fimg: pfav,
      ptime: "4:06",
      oimage: option,
    },
    {
      id: 14,
      image: music15,
      head: "Daylight",
      para: "david kushner",
      rdate: "Jun 16, 2022",
      album: "Daylight",
      fimg: pfav,
      ptime: "3:32",
      oimage: option,
    },
    {
      id: 15,
      image: music16,
      head: "Beggin",
      para: " Måneskin",
      rdate: "Feb 27, 2017",
      album: "Chosen",
      fimg: pfav,
      ptime: "3:31",
      oimage: option,
    },
    {
      id: 16,
      image: music17,
      head: "What Was I Made F...",
      para: " Billie eilish",
      rdate: "Sep 6, 2023",
      album: "What Was I Made For",
      fimg: pfav,
      ptime: "3:42",
      oimage: option,
    },
    {
      id: 17,
      image: music18,
      head: "Daddy Issues",
      para: " The Neighbourhood",
      rdate: "Aug 21, 2015",
      album: "Wiped out",
      fimg: pfav,
      ptime: "4:20",
      oimage: option,
    },
    {
      id: 18,
      image: music19,
      head: "Rolling In The Deep",
      para: " Adele",
      rdate: "Jun 5, 2011",
      album: "Adele 21",
      fimg: pfav,
      ptime: "3:48",
      oimage: option,
    },
    {
      id: 19,
      image: music20,
      head: "OneShot",
      para: " mhst",
      rdate: "Dec 14, 2023",
      album: "Toca Donka",
      fimg: pfav,
      ptime: "1:15",
      oimage: option,
    },
  ];

  return (
    <div>
      <div className="px-5">
        <div className="flex justify-between items-end px-5">
          <div>
            <p></p>
          </div>
          <div>
            <p className="text-[20px] text-white">Relase Date</p>
          </div>
          <div>
            <p className="text-[20px] text-white">album</p>
          </div>
          <div>
            <p className="text-[20px] text-white ">Time</p>
          </div>
        </div>
        {/* <div className="flex pt-[15px]">
          <div className="flex flex-col ">
            <img src={playmusic} alt="ps" className="mt-4 mr-4" />
            <p className="text-[24px] text-white pt-11 list-decimal list-inside">
              2
            </p>
            <p className="text-[24px] text-white pt-11 list-decimal list-inside">
              3
            </p>
            <p className="text-[24px] text-white pt-11 list-decimal list-inside">
              4
            </p>
            <p className="text-[24px] text-white pt-11 list-decimal list-inside">
              5
            </p>
          </div>

          <div className=" pb-[15px]">
            {data1.map((item, index) => (
              <div className="pt-[15px] ">
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="grid grid-cols-4 rounded-md justify-between items-center bg-[#1E1E1E] pr-2 "
                >
                  <div className="flex">
                    <div>
                      <img
                        src={item.image}
                        alt="m1"
                        className="w-[60px] h-[60px] rounded-[5px] border"
                      />
                    </div>
                    <div className="pl-[23px] ">
                      <p className="text-white text-[20px] pt-1">{item.head}</p>
                      <p className="text-white text-[12px] pt-0.5">
                        {item.para}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white text-[16px]">{item.rdate}</p>
                  </div>
                  <div>
                    <p className="text-white text-[16px]">{item.album}</p>
                  </div>
                  <div className="flex justify-end gap-2.5">
                    <div>
                      <img src={item.fimg} alt="pf" />
                    </div>
                    <div>
                      <p className="text-white text-[16px]">{item.ptime}</p>
                    </div>
                    <div>
                      <img src={item.oimage} alt="op" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="flex pt-[15px]">
          <div className="flex flex-col items-center mt-4 mr-4">
            {data1.map((_, index) => (
              <p key={index} className="text-[24px] text-white py-[20px]">
                {index + 1}
              </p>
            ))}
          </div>

          <div className="pb-[15px]">
            {data1.map((item, index) => (
              <div key={index} className="pt-[15px]">
                <div
                  onClick={() => setActiveIndex(index)}
                  className="grid grid-cols-4 rounded-md justify-between items-center bg-[#1E1E1E] pr-2 "
                >
                  <div className="flex">
                    <img
                      src={item.image}
                      alt="m1"
                      className="w-[60px] h-[60px] rounded-[5px] border"
                    />
                    <div className="pl-[23px] ">
                      <p className="text-white text-[20px] pt-1">{item.head}</p>
                      <p className="text-white text-[12px] pt-0.5">
                        {item.para}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white text-[16px]">{item.rdate}</p>
                  </div>
                  <div>
                    <p className="text-white text-[16px]">{item.album}</p>
                  </div>
                  <div className="flex justify-end gap-2.5">
                    <img src={item.fimg} alt="pf" />
                    <p className="text-white text-[16px]">{item.ptime}</p>
                    <img src={item.oimage} alt="op" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
