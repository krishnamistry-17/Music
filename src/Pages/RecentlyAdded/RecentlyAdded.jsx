import React from "react";
import AllFavorites from "../Favorites/AllFavorites";
import YourPlayList from "../PlayList/YourPlayList/YourPlayList";
const RecentlyAdded = () => {
  return (
    <div>
      <div>
        <AllFavorites />
      </div>
      <div className="mt-5">
        <YourPlayList />
      </div>
    </div>
  );
};

export default RecentlyAdded;
