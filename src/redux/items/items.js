import PokemonActionTypes from "./pokemonActionType";


const INITIAL_STATE = {
  PokemonItems: [],
  isFetching: false,
  nextUrl:null,
  errorMessage : undefined
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
        PokemonItems : action.payload
      };
    case PokemonActionTypes.FETCH_POKEMONS_ERREUR:
        return {
          ...state,
          isFetching: false,
          errorMessage : action.payload
        };
    case PokemonActionTypes.SET_NEXT_LIST:
          return {
            ...state,
            nextUrl: action.payload,
          };
    default:
      return state;
  }
};

export default itemReducer;
