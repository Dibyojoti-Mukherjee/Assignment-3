import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESSFULL,
  FETCH_SELECTED_ID,
} from "./ActionType";
import axios from "axios";
export function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}
export function fetchUserSuccessfull(users) {
  return {
    type: FETCH_USER_SUCCESSFULL,
    payLoad: users,
  };
}
export function fetchUserFaliure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payLoad: error,
  };
}
export function fetchSelectedId(ids) {
  return {
    type: FETCH_SELECTED_ID,
    payLoad: ids,
  };
}

export function fetchUsers() {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://hub.dummyapis.com/employee")
      .then((res) => {
        const data = res.data;
        dispatch(fetchUserSuccessfull(data));
      })
      .catch((error) => {
       
        dispatch(fetchUserFaliure(error.message));
      });
  };
}
