import React, { useEffect } from "react";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useDispatch } from "react-redux";
import { removeFromFavourite } from "../Redux/Action/action";
import { useFav } from "../Context/FavContext";

const RemoveFavorites = () => {
  const { selectedId } = useFav();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!selectedId || !token) return;

    async function removeFromFavourites() {
      try {
        const response = await apiInstance.delete(apiRoutes.REMOVE_FAV, {
          songId: selectedId,
        });

        console.log("Song remove from  favourites:", response.data.data);
        dispatch(removeFromFavourite(response.data.data));
      } catch (error) {
        console.error("Error removing to favourites:", error.message);
      }
    }

    removeFromFavourites();
  }, [selectedId]);

  return null;
};

export default RemoveFavorites;
