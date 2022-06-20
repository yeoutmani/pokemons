import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { fetchPokemonsStartAsync } from "./items/request";
import logger from 'redux-logger'

import { applyMiddleware, createStore } from "redux";
import { fetchContentStartAsync } from "./content/request";
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];
const sagaMiddleware = createSagaMiddleware();
const middlewaresSaga = [sagaMiddleware];

const store = createStore( rootReducer,applyMiddleware(...middlewaresSaga,...middlewares, logger));


sagaMiddleware.run(fetchPokemonsStartAsync);
sagaMiddleware.run(fetchContentStartAsync);

export default store;
