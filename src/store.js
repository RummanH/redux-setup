import { createStore, combineReducers } from "redux";
import minionReducer from "./reducers/minionReducer";

const initialState = {};

const reducer = combineReducers({
  minions: minionReducer,
});

const store = createStore(reducer, initialState);

export default store;
