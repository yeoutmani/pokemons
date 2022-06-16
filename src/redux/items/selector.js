import { createSelector } from "reselect";
const selectPokemonItems = state => state.PokemonReducer;
export const selecIsPokemonFetching = createSelector(
    [selectPokemonItems],
    (Pokemon) => Pokemon.isFetching
)
export const selecPokemonItems = createSelector(
    [selectPokemonItems],
    (Pokemon) => Pokemon.PokemonItems
)
export const selecNextUrl = createSelector(
    [selectPokemonItems],
    (Pokemon) => Pokemon.nextUrl
)