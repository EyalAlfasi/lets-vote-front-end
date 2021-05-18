import { takeLatest, all } from 'redux-saga/effects'
import { GET_POLLS } from '../reducers/pollReducer'
import { handleGetPolls } from './handlers/pollHandlers'

export function* watcherSaga() {
    yield all([
        takeLatest(GET_POLLS, handleGetPolls)
    ])
}