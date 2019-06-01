import {Action} from 'redux';

import {MyTickets} from '../../models/MyTickets'

export const POST_TICKET_TO_MYTICKETS="POST_TICKET_TO_MYTICKETS";
export const SHOW_MYTICKETS="SHOW_MYTICKETS";
export const UPDATE_MYTICKETS="UPDATE_MYTICKETS";
export const FETCH_MYTICKETS="FETCH_MYTICKETS";

export interface IpostTicketToMyTickets extends Action{
    myTicket:MyTickets
}

export interface IupdateMyTickets extends Action{
    myTicket:MyTickets
}

export interface IshowMyTickets extends Action{
    myTickets:MyTickets[]
}

export interface IfetchMyTickets extends Action{
}

export function postTicketToMyTickets(myTicket:MyTickets):IpostTicketToMyTickets{
    return{
        type:POST_TICKET_TO_MYTICKETS,
        myTicket:myTicket
    }
}

export function updateMyTickets(myTicket:MyTickets):IupdateMyTickets{
    return{
        type:UPDATE_MYTICKETS,
        myTicket:myTicket
    }
}

export function showMyTickets(myTickets:MyTickets[]):IshowMyTickets{
    return{
        type:SHOW_MYTICKETS,
        myTickets:myTickets
    }
}

export function fetchMyTickets():IfetchMyTickets{
    return{
        type:FETCH_MYTICKETS,
    }
}