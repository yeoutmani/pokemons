import ContentTypes from "./contentType";
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import * as selectors from "./selector";
import { select } from "redux-saga/effects";

export function* fetchContentStartAsync() {
  try {
    const contentVar = yield select(selectors.selecContentVar);
    const { data } = yield call(axios.get, contentVar.url);
    yield put({ type: ContentTypes.FETCH_CONTENT_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: ContentTypes.FETCH_CONTENT_ERREUR, payload: e });
  }
}

export function* fetchContentStart() {
  yield takeEvery(ContentTypes.FETCH_CONTENT_START, fetchContentStartAsync);
}

export function* contentSaga() {
  yield call(fetchContentStart);
}
