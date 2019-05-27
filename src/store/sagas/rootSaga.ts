import {all,takeEvery} from 'redux-saga/effects';

import {FETCH_FOOTBALL_MATCHES,UPDATE_FOOTBALL_MATCH} from '../actions/footballActions';
import {fetchFootballMatches,updateFootballMatch} from './footballSaga';

import {FETCH_BASKETBALL_MATCHES,UPDATE_BASKETBALL_MATCH} from '../actions/basketballActions';
import {fetchBasketballMatches,updateBasketballMatch} from './basketballSaga';

import {POST_MATCH_TO_TICKET,DELETE_MATCH_FROM_TICKET,FETCH_TICKET_MATCHES} from '../actions/ticketActions';
import {postMachToTicket,deleteMachFromTicket,getTicketMatches} from '../sagas/ticketSaga'

export function* rootSaga(){
    yield all(
        [
            takeEvery(FETCH_FOOTBALL_MATCHES,fetchFootballMatches),
            takeEvery(UPDATE_FOOTBALL_MATCH,updateFootballMatch),
            takeEvery(FETCH_BASKETBALL_MATCHES,fetchBasketballMatches),
            takeEvery(UPDATE_BASKETBALL_MATCH,updateBasketballMatch),
            takeEvery(POST_MATCH_TO_TICKET,postMachToTicket),
            takeEvery(DELETE_MATCH_FROM_TICKET,deleteMachFromTicket),
            takeEvery(FETCH_TICKET_MATCHES,getTicketMatches)
        ]
    )
}