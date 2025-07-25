import React from "react";
import SideBar from "../SideBar/SideBar";
import AllFavorites from "./AllFavorites";

const Favorites = () => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div>
        <AllFavorites />
      </div>
    </div>
  );
};

export default Favorites;
