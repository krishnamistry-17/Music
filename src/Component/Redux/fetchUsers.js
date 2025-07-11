import {
  FetchUsersBegin,
  FetchUsersSucess,
  FetchUsersError,
} from "./Action/action";

//   thunk action
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(FetchUsersBegin());

    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(FetchUsersSucess(json));
        return json;
      })
      .catch((err) => dispatch(FetchUsersError(err)));
  };
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
