import {all,takeEvery} from 'redux-saga/effects';

import {FETCH_FOOTBALL_MATCHES} from '../actions/footballActions';
import {UPDATE_MATCH} from '../actions/footballActions'
import {fetchFootballMatches,update} from './footballSaga';

import {POST_MATCH_TO_TICKET,DELETE_MATCH_FROM_TICKET,FETCH_TICKET_MATCHES} from '../actions/ticketActions';
import {postMachToTicket,deleteMachFromTicket,getTicketMatches} from '../sagas/ticketSaga'

export function* rootSaga(){
    yield all(
        [
            takeEvery(FETCH_FOOTBALL_MATCHES,fetchFootballMatches),
            takeEvery(UPDATE_MATCH,update),
            takeEvery(POST_MATCH_TO_TICKET,postMachToTicket),
            takeEvery(DELETE_MATCH_FROM_TICKET,deleteMachFromTicket),
            takeEvery(FETCH_TICKET_MATCHES,getTicketMatches)
        ]
    )
}