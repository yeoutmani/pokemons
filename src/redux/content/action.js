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

export const setContentData = (contentData) => ({
  type: ContentTypes.SET_CONTENT_DATA,
  payload : contentData
});


  export function fetchContentStartAsync(dispatch) {
   let state = store.getState().ContentReducer;
   let url = state.contentVar.url;

    return function(dispatch) {
      return axios.get(url)
        .then(({ data }) => {
          dispatch(setContentData(data));
          dispatch(fetchContentSuccess(data));

      /*  dispatch(fetchPokemonsSuccess(results));
        dispatch(setNextUrl(data.next));
        //dispatch(setNextUrl(data.next));*/
      }).catch(error => dispatch(fetchContentErreur(error)))
    };
  }