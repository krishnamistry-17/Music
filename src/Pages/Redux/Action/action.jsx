export const getallAlbum = (album) => {
  return {
    type: "GET_ALL_ALBUM",
    payload: album,
  };
};

export const getAllArtitst = (artist) => {
  return {
    type: "GET_ALL_ARTIST",
    payload: artist,
  };
};

export const getAllSong = (song) => {
  return {
    type: "GET_ALL_SONG",
    payload: song,
  };
};
