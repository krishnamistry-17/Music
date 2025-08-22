import React from "react";
import AllFavorites from "../Favorites/AllFavorites";
import Library from "../Library/Library";

const RecentlyAdded = () => {
  return (
    <div>
      <div>
        <AllFavorites />
      </div>
      <div className="mt-5">
        <Library />
      </div>
    </div>
  );
};

export default RecentlyAdded;
