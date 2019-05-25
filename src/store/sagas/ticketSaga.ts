import {put} from 'redux-saga/effects';

import {IpostMatchToTicket,IdeleteMatchFromTicket} from '../actions/ticketActions'
import {postTicketMatchService,getTicketMatchesService,deleteMatchFromTicketService} from '../../services/ticket-service'
import {showTicket} from '../actions/ticketActions'
import {TicketMatch} from '../../models/TicketMatch'

export function* postMachToTicket(ticketMatch:IpostMatchToTicket){  
        yield postTicketMatchService(ticketMatch.ticketMatch);
        const ticketMatches=yield getTicketMatchesService();
        console.log("Stampaj to sto si dobio-ticketMatches=> "+ticketMatches);
        yield put(showTicket(ticketMatches));
}

export function* deleteMachFromTicket(ticketMatchId:IdeleteMatchFromTicket){
        yield deleteMatchFromTicketService(ticketMatchId.ticketMatchId);
        const ticketMatches=yield getTicketMatchesService();
        console.log("Delete succes");
        yield put(showTicket(ticketMatches));
}

