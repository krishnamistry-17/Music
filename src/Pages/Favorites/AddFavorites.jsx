import React, { useEffect } from "react";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useDispatch } from "react-redux";
import { addFavorites } from "../Redux/Action/action";
import { useFav } from "../Context/FavContext";

const AddFavorites = () => {
  const { selectedId } = useFav();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!selectedId || !token) return;

    async function addToFavourites() {
      try {
        const response = await apiInstance.post(apiRoutes.ADD_FAVOURITES, {
          songId: selectedId,
        });

        console.log("Song added to favourites:", response.data.data);
        dispatch(addFavorites(response.data.data));
      } catch (error) {
        console.error("Error adding to favourites:", error.message);
      }
    }

    addToFavourites();
  }, [selectedId]);

  return null;
};

export default AddFavorites;
