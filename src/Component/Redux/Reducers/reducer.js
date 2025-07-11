import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILUR,
} from "../Action/action";

const initailState = {
  users: [],
  loading: false,
  error: null,
};

export const PostReducer = (state = initailState, action) => {
  switch (action.type) {
    case "FETCH_USERS_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };

    case "FETCH_USERS_FAILUR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
