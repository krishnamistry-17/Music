const initialState = {
  artist: [],
  album: [],
  song: [],
  user: {
    name: "",
    email: "",
    password: "",
  },
  users: {
    email: "",
    password: "",
  },
  id: [],
  songId: [],
  favorites: [],
  removefav: [],
};

const MusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ALBUM":
      return { ...state, album: action.payload };

    case "GET_ALL_ARTIST":
      return { ...state, artist: action.payload };

    case "GET_ALL_SONG":
      return { ...state, song: action.payload };

    case "GET_SIGNUP":
      return { ...state, user: action.payload };

    case "GET_LOGIN":
      return { ...state, users: action.payload };

    case "GET_ALLFAVOURITES":
      return { ...state, id: [...state.id, action.payload] };

    case "ADD_FAVORITES":
      console.log("Reducer recied>>>>>>>", action.payload);
      return { ...state, favorites: [...state.favorites, action.payload] };

    case "REMOVE_FAVORITES":
      return { ...state, removefav: [...state.removefav, action.payload] };

    default:
      return state;
  }
};

export default MusicReducer;
