import {put} from 'redux-saga/effects';

import {IpostTicketToMyTickets, updateMyTickets, showMyTickets} from '../actions/myTicketAction'
import {postTicketToMyTicketService,fetchMyTicketsService} from '../../services/myticket-service'

export function* postTicketToMyTickets(ticket:IpostTicketToMyTickets){  
    const myTicket=yield postTicketToMyTicketService(ticket.myTicket);
    yield put(updateMyTickets(myTicket));
}

export function* fetchMyTickets(){  
    const myTickets=yield fetchMyTicketsService();
    yield put(showMyTickets(myTickets));
}