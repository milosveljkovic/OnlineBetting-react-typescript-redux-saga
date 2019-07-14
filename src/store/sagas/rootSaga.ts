import {all,takeEvery} from 'redux-saga/effects';

import {FETCH_FOOTBALL_MATCHES} from '../actions/footballActions';
import {fetchFootballMatches} from './footballSaga';

import {FETCH_BASKETBALL_MATCHES} from '../actions/basketballActions';
import {fetchBasketballMatches} from './basketballSaga';

import {POST_TICKET_TO_MYTICKETS, FETCH_MYTICKETS} from '../actions/myTicketAction';
import {postTicketToMyTickets,fetchMyTickets} from '../sagas/myTicketSaga'

export function* rootSaga(){
    yield all(
        [
            takeEvery(FETCH_FOOTBALL_MATCHES,fetchFootballMatches),
            takeEvery(FETCH_BASKETBALL_MATCHES,fetchBasketballMatches),
            takeEvery(POST_TICKET_TO_MYTICKETS,postTicketToMyTickets),
            takeEvery(FETCH_MYTICKETS,fetchMyTickets)
        ]
    )
}