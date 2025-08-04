import React, { useEffect } from "react";
import { useView } from "../Context/ViewContext";
import AllSongs from "./AllSongs";
import AllPlaylist from "./AllPlaylist";
import AllAlbum from "./AllAlbum";
import AllArtist from "./AllArtist";
import back from "../../assets/svgs/blueback.svg";
import { useNavigate } from "react-router-dom";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import Playmood from "./Playmood";
import AudioMusic from "../Home/AudioMusic";

const ViewSongs = () => {
  const { openSource } = useView();
  const navigate = useNavigate();
  const { source } = usePlayerSource();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex gap-2">
      <div>
        <img
          onClick={() => navigate("/")}
          src={back}
          alt="back"
          className="lg:hidden pl-2 pt-2"
        />
      </div>
      <div>
        <div>{openSource === "allsong" && <AllSongs />}</div>
        <div>{openSource === "moodplaysong" && <AllPlaylist />}</div>
        <div>{openSource === "allalbums" && <AllAlbum />}</div>
        <div>{openSource === "allartist" && <AllArtist />}</div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#181818] border-t border-gray-700">
        <div>{source === "moodplay" && <Playmood />}</div>
        {source === "newrelease" && <AudioMusic />}
      </div>
    </div>
  );
};

export default ViewSongs;
