import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { fetchCollectionsPokemons } from "./items/request";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

import logger from 'redux-logger'

////const sagaMiddleware = createSagaMiddleware();
//const middlewares = [thunk];
var thunkMiddleware = [thunk];

const store = createStore( rootReducer, applyMiddleware(thunk, logger));


//sagaMiddleware.run(fetchCollectionsPokemons);

export default store;
