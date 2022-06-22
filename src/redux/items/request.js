/** @format */

import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

//import { setPokemonItem } from "./action";
import PokemonActionTypes from "./pokemonActionType";
import { select } from "redux-saga/effects";
import * as selectors from "./selector";

export function* fetchPokemonsStartAsync() {
  try {
    const nextUrl = yield select(selectors.selecNextUrl);
    const { data } = yield call(axios.get, nextUrl);
    yield put({
      type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: PokemonActionTypes.FETCH_POKEMONS_ERREUR, payload: e });
  }
}

export function* loadMorePokemons() {
  try {
    const nextUrl = yield select(selectors.selecNextUrl);
    const { data } = yield call(axios.get, nextUrl);
    yield put({
      type: PokemonActionTypes.FETCH_LOAD_MORE_POKEMONS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: PokemonActionTypes.FETCH_LOAD_MORE_POKEMONS_ERREUR,
      payload: e,
    });
  }
}

export function* fetchPokemonsListener() {
  yield takeEvery(
    PokemonActionTypes.FETCH_POKEMONS_START,
    fetchPokemonsStartAsync
  );
  yield takeEvery(
    PokemonActionTypes.FETCH_LOAD_MORE_POKEMONS_START,
    loadMorePokemons
  );
}

export function* pokemonSaga() {
  yield call(fetchPokemonsListener);
}
