import PokemonActionTypes from "./pokemonActionType";


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

/*
  export function fetchPokemonsStartAsync() {
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
  }*/
