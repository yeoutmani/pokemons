import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { applyMiddleware, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import rootSaga from "./root-saga";

const middlewares = [ReduxThunk];
const sagaMiddleware = createSagaMiddleware();
const middlewaresSaga = [sagaMiddleware];

const store = createStore( rootReducer,applyMiddleware(...middlewaresSaga,...middlewares, logger));

sagaMiddleware.run(rootSaga);

export default store;
