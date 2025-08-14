import React, { useEffect } from "react";
import AllAddPlayList from "../AllPlayList/AllAddPlayList";
import back from "../../../assets/svgs/back.svg";
import { useNavigate } from "react-router-dom";

const YourPlayList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="px-2">
      <div className="flex items-center gap-2 md:hidden  pt-10">
        <div>
          <img src={back} alt="back" onClick={() => navigate("/playlist")} />
        </div>
        <div>
          <p
            className=" bg-gradient-to-t from-darkpink to-darkblue text-transparent bg-clip-text
         text-[32px] font-Vazirmatn-600"
          >
            PlayList Songs
          </p>
        </div>
      </div>
      <p
        className=" bg-gradient-to-t from-darkpink to-darkblue text-transparent bg-clip-text
         text-[32px] font-Vazirmatn-600  md:block hidden"
      >
        PlayList Songs
      </p>
      <div>
        <AllAddPlayList />
      </div>
    </div>
  );
};

export default YourPlayList;
