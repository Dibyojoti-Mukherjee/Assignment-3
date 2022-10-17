import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./User/UserReducer";
export  const store = createStore(UserReducer, applyMiddleware(thunk));
