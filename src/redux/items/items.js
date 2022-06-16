const INITIAL_STATE = {
  PokemonItems: null,
  isFetching: false,
  nextUrl:"",
  errorMessage : undefined
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_POKEMONS_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_POKEMONS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        PokemonItems : action.payload
      };
      case "FETCH_POKEMONS_ERREUR":
        return {
          ...state,
          isFetching: false,
          errorMessage : action.payload
        };
        case "SET_NEXT_LIST":
          return {
            ...state,
            nextUrl: action.payload,
          };
    default:
      return state;
  }
};

export default itemReducer;
