import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

//import { setPokemonItem } from "./action";
import PokemonActionTypes from "./pokemonActionType";
//import { selecPokemonItems } from "./selector";


export function*  fetchPokemonsStartAsync() {
    try {
      const { data } = yield call(axios.get, 'https://pokeapi.co/api/v2/item/')
      console.log("data", data)
      yield put({ type : PokemonActionTypes.FETCH_POKEMONS_SUCCESS, payload : data })
    } catch (e) {
      console.log(e.message)
    }
}

export function* fetchPokemonsStart(){
    yield takeEvery(PokemonActionTypes.FETCH_POKEMONS_START,
        fetchPokemonsStartAsync);
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