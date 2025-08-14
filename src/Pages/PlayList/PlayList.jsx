import React, { useEffect } from "react";
import AddPlayList from "./AddPlayList/AddPlayList";

const PlayList = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div>
        <AddPlayList />
      </div>
    </div>
  );
};

export default PlayList;
