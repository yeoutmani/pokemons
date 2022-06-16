import PokemonActionTypes from "./pokemonActionType";
import axios from 'axios';

export const fetchPokemonsStart = () => ({
  type: PokemonActionTypes.FETCH_POKEMONS_START,
});

export const fetchPokemonsSuccess = (PokemonItems) => ({
  type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS,
  payload : PokemonItems
});
export const fetchPokemonsErreur = (error) => ({
  type: PokemonActionTypes.FETCH_POKEMONS_ERREUR,
  payload : error
});

export const setNextUrl = (nextUrl) => ({
  type: PokemonActionTypes.SET_NEXT_LIST,
  payload : nextUrl
});


  export function fetchPokemonsStartAsync(next,data) {
    console.log('neeeeext', next)
    console.log('data', data)

    return function(dispatch) {
      return axios.get("https://pokeapi.co/api/v2/item/")
        .then(({ data }) => {
        dispatch(fetchPokemonsSuccess(data));
        //dispatch(setNextUrl(data.next));
      }).catch(error => dispatch(fetchPokemonsErreur(error)))
    };
  }
