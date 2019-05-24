import {put} from 'redux-saga/effects';

import {IpostMatchToTicket} from '../actions/ticketActions'
import {postTicketMatchService} from '../../services/ticket-service'
import {showTicket} from '../actions/ticketActions'

export function* postMachToTicket(ticketMatch:IpostMatchToTicket){
        const ticketMatches=yield postTicketMatchService(ticketMatch.payload);
        console.log("Stampaj to sto si dobio-ticketMatches=> "+ticketMatch);
        yield put(showTicket(ticketMatches));
}