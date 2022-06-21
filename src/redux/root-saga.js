import { all, call } from "redux-saga/effects";
import { fetchContentStart } from "./content/action";
import { fetchPokemonsStart } from "./items/request";

export default function* rootSaga() {
    yield all([ call(fetchPokemonsStart),call(fetchContentStart) ])
}