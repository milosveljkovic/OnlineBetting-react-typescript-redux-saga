import {all,takeEvery} from 'redux-saga/effects';

import {FETCH_FOOTBALL_MATCHES} from '../actions/footballActions';
import {fetchFootballMatches} from './footballSaga';

export function* rootSaga(){
    yield all(
        [
            takeEvery(FETCH_FOOTBALL_MATCHES,fetchFootballMatches)
        ]
    )
}