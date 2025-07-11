import { PostReducer } from "./Reducers/reducer";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const store = createStore(PostReducer, applyMiddleware(thunk));

export default store;
