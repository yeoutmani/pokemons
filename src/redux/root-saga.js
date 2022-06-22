import { all, call } from "redux-saga/effects";
import { contentSaga } from "./content/request";
import { pokemonSaga } from "./items/request";
export default function* rootSaga() {
  yield all([call(pokemonSaga), call(contentSaga)]);
}