import { call, put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'

//import { setPokemonItem } from "./action";
import PokemonActionTypes from "./pokemonActionType";
import {select} from 'redux-saga/effects';
import * as selectors from './selector';
import * as contentSelectors from '../content/selector';


export function*  fetchPokemonsStartAsync() {

    try {
      console.log('fetchPokemonsStartAsync');

      const selecPokemonItems = yield select(selectors.selecPokemonItems);
      const selecContentData = yield select(contentSelectors.selecContentData);

      console.log('selecPokemonItems', selecPokemonItems)
      console.log('selecContentData', selecContentData)

      yield put({ type : PokemonActionTypes.FETCH_POKEMONS_START, payload : true })
      const { data } = yield call(axios.get, 'https://pokeapi.co/api/v2/item/')
      console.log('data', data)
      yield put({ type : PokemonActionTypes.FETCH_POKEMONS_SUCCESS, payload : data.results })
    } catch (e) {
      console.log('erooor', e);

      yield put({ type : PokemonActionTypes.FETCH_POKEMONS_ERREUR, payload : e })
    }
}

export function* fetchPokemonsStart(){
    yield takeEvery(PokemonActionTypes.FETCH_POKEMONS_START,
        fetchPokemonsStartAsync);
}

export function* pokemonSaga() {
yield all([call(fetchPokemonsStart)])
}

/*export function fetchPokemonsStartAsync() {
    let state = store.getState().PokemonReducer;
    let pokemonItems = state.PokemonItems;
    let nextUrl = state.nextUrl;
    let url = "https://pokeapi.co/api/v2/item/";
 
    if (nextUrl.length !== 0)
    url = nextUrl;
 
 
     return function(dispatch) {
       return axios.get(url)
         .then(({ data }) => {
         let results = data.results;
          if (pokemonItems !== null)
           results = pokemonItems.concat(results);
         dispatch(fetchPokemonsSuccess(results));
         dispatch(setNextUrl(data.next));
         //dispatch(setNextUrl(data.next));
       }).catch(error => dispatch(fetchPokemonsErreur(error)))
     };
   }
 */