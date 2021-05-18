import { call, put } from 'redux-saga/effects'
import { pollsService } from '../../../services/pollsService';
import { setPolls } from '../../reducers/pollReducer';


export function* handleGetPolls(action) {
    try {
        const polls = yield call(pollsService.query);
        console.log(polls);
        yield put(setPolls(polls))
    }
    catch (err) {
        console.error('Can\'t fetch polls', err)
    }
}