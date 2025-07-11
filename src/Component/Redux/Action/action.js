export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILUR = "FETCH_USERS_FAILUR";

export const FetchUsersBegin = () => {
  return {
    type: "FETCH_USERS_BEGIN",
  };
};

export const FetchUsersSucess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: { users },
  };
};

export const FetchUsersError = (error) => {
  return {
    type: "FETCH_USERS_FAILUR",
    payload: { error },
  };
};
