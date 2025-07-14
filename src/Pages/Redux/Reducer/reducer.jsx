const initialState = {
  artist: [],
  album: [],
  song: [],
};

const MusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ALBUM":
      return { ...state, album: action.payload };

    case "GET_ALL_ARTIST":
      return { ...state, artist: action.payload };

    case "GET_ALL_SONG":
      return { ...state, song: action.payload };

    default:
      return state;
  }
};

export default MusicReducer;
