import {
  FETCH_SELECTED_ID,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESSFULL,
} from "./ActionType";

const initialState = {
  loading: false,
  data: [],
  error: "",
  selectedId:[]
};

function UserReducer(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        data: actions.payLoad,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: actions.payLoad,
        data: [],
      };
      case FETCH_SELECTED_ID:
        return {
          ...state,
          selectedId: actions.payLoad,
        };
    default:
      return state;
  }
}

export default UserReducer;
