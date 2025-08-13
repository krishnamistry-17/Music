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

export const getAllPlaylist = (list) => {
  return {
    type: "GET_ALL_PLAYLIST",
    payload: list,
  };
};

export const addPlayList = (details) => {
  return {
    type: "ADD_PLAYLIST",
    payload: details,
  };
};

export const removeFromPlayList = (details) => {
  return {
    type: "REMOVE_PLAYLIST",
    payload: details,
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

export const getForgot = (email) => {
  return {
    type: "GET_FORGOT",
    payload: email,
  };
};

export const getReset = (password) => {
  return {
    type: "RESET_PASSWORD",
    payload: password,
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

export const getAllFaq = (id) => {
  return {
    type: "GET_ALLFAQ",
    payload: id,
  };
};

export const createFaq = (question) => {
  return {
    type: "CREATE_FAQ",
    payload: question,
  };
};

export const removeFromFaq = (faq) => {
  return {
    type: "REMOVE_FAQ",
    payload: faq,
  };
};
