const INITIAL_STATE = {
  PokemonItems: [],
  nextUrl: "",
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_POKEMON_LIST":
      return {
        ...state,
        PokemonItems: action.payload,
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
