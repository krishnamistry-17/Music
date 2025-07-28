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
  genere: [],
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
      const alreadyExists = state.favorites.some(
        (fav) => fav._id === action.payload._id
      );
      return alreadyExists
        ? state
        : { ...state, favorites: [...state.favorites, action.payload] };

    case "REMOVE_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (song) => song._id !== action.payload._id
        ),
      };

    case "GET_GENERE":
      return { ...state, genere: [...state.genere, action.payload] };

    default:
      return state;
  }
};

export default MusicReducer;
