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

export const getSignUp = (user) => {
  return {
    type: "GET_SIGNUP",
    payload: user,
  };
};

export const getLogin = (users) => {
  return {
    type: "GET_LOGIN",
    payload: users,
  };
};

export const getAllFavourites = (id) => {
  return {
    type: "GET_ALLFAVOURITES",
    payload: id,
  };
};

export const addFavorites = (song) => {
  return {
    type: "ADD_FAVORITES",
    payload: song,
  };
};

export const removeFromFavourites = (song) => {
  return {
    type: "REMOVE_FAVORITES",
    payload: song,
  };
};

export const getAllGenere = (genere) => {
  return {
    type: "GET_GENERE",
    payload: genere,
  };
};
