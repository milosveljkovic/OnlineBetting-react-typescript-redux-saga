import {put} from 'redux-saga/effects';

import {showTicketMatches,IpostMatchToTicket,IdeleteMatchFromTicket,setIntialState, IputIntialState} from '../actions/ticketActions'
import {postTicketMatchService,getTicketMatchesService,deleteMatchFromTicketService,setInitialTicketStateService} from '../../services/ticket-service'

export function* getTicketMatches(){
        const ticketMatches=yield getTicketMatchesService();
        yield put(showTicketMatches(ticketMatches));
}

export function* postMachToTicket(ticketMatch:IpostMatchToTicket){  
        yield postTicketMatchService(ticketMatch.ticketMatch);
}

export function* deleteMachFromTicket(ticketMatchId:IdeleteMatchFromTicket){
        yield deleteMatchFromTicketService(ticketMatchId.ticketMatchId);
}

export function* putInitialTicketState(ticketMatches:IputIntialState){
        yield setInitialTicketStateService(ticketMatches.ticketMatches);
        yield put(setIntialState());
}