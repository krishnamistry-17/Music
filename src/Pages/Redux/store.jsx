import { createStore } from "redux";
import MusicReducer from "./Reducer/reducer";

const store = createStore(MusicReducer);

export default store;
