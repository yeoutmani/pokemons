/** @format */

import ContentTypes from "./contentType";

export const fetchContentStart = () => ({
  type: ContentTypes.FETCH_CONTENT_START,
});

export const fetchContentSuccess = (ContentData) => ({
  type: ContentTypes.FETCH_CONTENT_SUCCESS,
  payload: ContentData,
});

export const fetchContentErreur = (error) => ({
  type: ContentTypes.FETCH_CONTENT_ERREUR,
  payload: error,
});

export const setModaleVisible = (isModalVisible) => ({
  type: ContentTypes.SET_MODAL_VISIBLE,
  payload: isModalVisible,
});

export const setContentVar = (contentVar) => ({
  type: ContentTypes.SET_CONTENT_VAR,
  payload: contentVar,
});
