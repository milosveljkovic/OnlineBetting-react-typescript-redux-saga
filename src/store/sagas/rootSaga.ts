import {all,takeEvery} from 'redux-saga/effects';

import {FETCH_FOOTBALL_MATCHES} from '../actions/footballActions';
import {UPDATE_MATCH} from '../actions/footballActions'
import {fetchFootballMatches,update} from './footballSaga';

import {POST_MATCH_TO_TICKET} from '../actions/ticketActions';
import {postMachToTicket} from '../sagas/ticketSaga'

export function* rootSaga(){
    yield all(
        [
            takeEvery(FETCH_FOOTBALL_MATCHES,fetchFootballMatches),
            takeEvery(UPDATE_MATCH,update),
            takeEvery(POST_MATCH_TO_TICKET,postMachToTicket)
        ]
    )
}