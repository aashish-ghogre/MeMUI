import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import gameReducer from "../reducers/GameReducer";
import rootSaga from "../sagas";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();
const store = createStore(gameReducer, composeEnhancer(applyMiddleware(saga)));

saga.run(rootSaga);

export default store;
