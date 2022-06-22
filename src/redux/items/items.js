import PokemonActionTypes from "./pokemonActionType";


const INITIAL_STATE = {
  PokemonItems: [],
  isFetching: false,
  nextUrl: "https://pokeapi.co/api/v2/item/",
  errorMessage: undefined,
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_POKEMONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case PokemonActionTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        PokemonItems: action.payload.results,
        nextUrl: action.payload.next,
      };
    case PokemonActionTypes.FETCH_POKEMONS_ERREUR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PokemonActionTypes.FETCH_LOAD_MORE_POKEMONS_SUCCESS:
      const loadingData = action.payload.results;
      const { PokemonItems } = state;
      return {
        ...state,
        PokemonItems: [...PokemonItems, ...loadingData],
        nextUrl: action.payload.next,
      };
    case PokemonActionTypes.FETCH_LOAD_MORE_POKEMONS_ERREUR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
