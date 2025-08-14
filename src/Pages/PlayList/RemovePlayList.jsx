import React, { useEffect } from "react";
import { usePlayList } from "../Context/AddPlayListContext";
import { useDispatch } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { removeFromPlayList } from "../Redux/Action/action";

const RemovePlayList = () => {
  const { selectedSongId } = usePlayList();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!selectedSongId || !token) return;

    async function removeFromToPlayList() {
      try {
        const response = await apiInstance.delete(
          apiRoutes.REMOVE_PLAYLIST(selectedSongId)
        );
        console.log(
          "Removed from playlist successfully",
          response.data.results
        );
        console.log("response.data.data :", response.data.results);
        dispatch(removeFromPlayList(response.data.results));
      } catch (error) {
        console.error("Error removing to playlist", error.message);
      }
    }
    removeFromToPlayList();
  }, [selectedSongId]);
  return null;
};

export default RemovePlayList;
