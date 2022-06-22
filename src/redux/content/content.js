/** @format */

import ContentTypes from "./contentType";

const INITIAL_STATE = {
  contentData: null,
  contentVar: { title: "" },
  isModalVisible: false,
  isFetching: false,
  errorMessage: undefined,
};

const contentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContentTypes.FETCH_CONTENT_START:
      return {
        ...state,
        isFetching: true,
      };
    case ContentTypes.FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        contentData: action.payload,
      };
    case ContentTypes.FETCH_CONTENT_ERREUR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ContentTypes.SET_MODAL_VISIBLE:
      return {
        ...state,
        isModalVisible: action.payload,
      };
    case ContentTypes.SET_CONTENT_VAR:
      return {
        ...state,
        contentVar: action.payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
