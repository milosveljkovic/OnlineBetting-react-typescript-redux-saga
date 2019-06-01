import {all,takeEvery} from 'redux-saga/effects';

import {FETCH_FOOTBALL_MATCHES,UPDATE_FOOTBALL_MATCH, PUT_FOOTBALL_MATCH_INITIAL_STATE} from '../actions/footballActions';
import {fetchFootballMatches,updateFootballMatch, putFootballMatchInitialState} from './footballSaga';

import {FETCH_BASKETBALL_MATCHES,UPDATE_BASKETBALL_MATCH,PUT_BASKETBALL_MATCH_INITIAL_STATE} from '../actions/basketballActions';
import {fetchBasketballMatches,updateBasketballMatch,putBasketballMatchInitialState} from './basketballSaga';

import {POST_MATCH_TO_TICKET,DELETE_MATCH_FROM_TICKET,FETCH_TICKET_MATCHES,PUT_INITIAL_STATE} from '../actions/ticketActions';
import {postMachToTicket,deleteMachFromTicket,getTicketMatches,putInitialTicketState} from '../sagas/ticketSaga'

import {POST_TICKET_TO_MYTICKETS, FETCH_MYTICKETS} from '../actions/myTicketAction';
import {postTicketToMyTickets,fetchMyTickets} from '../sagas/myTicketSaga'

export function* rootSaga(){
    yield all(
        [
            takeEvery(FETCH_FOOTBALL_MATCHES,fetchFootballMatches),
            takeEvery(UPDATE_FOOTBALL_MATCH,updateFootballMatch),
            takeEvery(PUT_FOOTBALL_MATCH_INITIAL_STATE,putFootballMatchInitialState),
            takeEvery(FETCH_BASKETBALL_MATCHES,fetchBasketballMatches),
            takeEvery(UPDATE_BASKETBALL_MATCH,updateBasketballMatch),
            takeEvery(PUT_BASKETBALL_MATCH_INITIAL_STATE,putBasketballMatchInitialState),
            takeEvery(POST_MATCH_TO_TICKET,postMachToTicket),
            takeEvery(DELETE_MATCH_FROM_TICKET,deleteMachFromTicket),
            takeEvery(FETCH_TICKET_MATCHES,getTicketMatches),
            takeEvery(PUT_INITIAL_STATE,putInitialTicketState),
            takeEvery(POST_TICKET_TO_MYTICKETS,postTicketToMyTickets),
            takeEvery(FETCH_MYTICKETS,fetchMyTickets)
        ]
    )
}