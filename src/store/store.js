import { combineReducers, createStore, applyMiddleware } from "redux";
import { pollReducer } from './reducers/pollReducer'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    pollReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

export const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)
