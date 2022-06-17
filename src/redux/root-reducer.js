import { combineReducers } from "redux";
import contentReducer from "./content/content";
import itemReducer from "./items/items";

export default combineReducers({
  PokemonReducer: itemReducer,
  ContentReducer : contentReducer
});
