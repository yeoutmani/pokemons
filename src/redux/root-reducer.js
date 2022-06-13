import { combineReducers } from "redux";
import itemReducer from "./items/items";

export default combineReducers({
  PokemonReducer: itemReducer,
});
