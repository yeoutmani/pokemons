/** @format */

import PokemonActionTypes from "./pokemonActionType";

export const fetchPokemonsStart = () => ({
  type: PokemonActionTypes.FETCH_POKEMONS_START,
});

export const fetchPokemonsSuccess = (data) => ({
  type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS,
  payload: data,
});
export const fetchPokemonsErreur = (error) => ({
  type: PokemonActionTypes.FETCH_POKEMONS_ERREUR,
  payload: error,
});

export const fetchLoadMorePokemonsStart = (data) => ({
  type: PokemonActionTypes.FETCH_LOAD_MORE_POKEMONS_START,
  payload: data,
});
