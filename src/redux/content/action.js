import axios from 'axios';
import store from "../store";
import ContentTypes from "./contentType";

export const fetchContentStart = () => ({
  type: ContentTypes.FETCH_CONTENT_START,
});

export const fetchContentSuccess = (ContentData) => ({
  type: ContentTypes.FETCH_CONTENT_SUCCESS,
  payload : ContentData
});
export const fetchContentErreur = (error) => ({
  type: ContentTypes.FETCH_CONTENT_ERREUR,
  payload : error
});


export const setModaleVisible = (isModalVisible) => ({
  type: ContentTypes.SET_MODAL_VISIBLE,
  payload : isModalVisible
});

export const setContentVar = (contentVar) => ({
  type: ContentTypes.SET_CONTENT_VAR,
  payload : contentVar
});


  export function fetchContentStartAsync() {
   let state = store.getState().ContentReducer;
   console.log('state', state)
   /*let pokemonItems = state.PokemonItems;
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
    };*/
  }