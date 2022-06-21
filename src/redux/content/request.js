import ContentTypes from "./contentType";
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
export function*  fetchContentStartAsync() {
    try {
      const { data } = yield call(axios.get, 'https://pokeapi.co/api/v2/item/13/')
      yield put({ type : ContentTypes.SET_CONTENT_DATA, payload :data })
    } catch (e) {
      console.log(e.message)
    }
    
}

export function* fetchContentStart(){
    yield takeEvery(ContentTypes.FETCH_CONTENT_START,
        fetchContentStartAsync);
}