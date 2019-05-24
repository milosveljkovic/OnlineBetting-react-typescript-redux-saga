import {Action} from 'redux';

import {TicketMatch} from '../../models/TicketMatch'

export const POST_MATCH_TO_TICKET="POST_MATCH_TO_TICKET";
export const SHOW_TICKET="SHOW_TICKET";


export interface IpostMatchToTicket extends Action{
    payload:TicketMatch
}

export interface IshowTicket extends Action{
    ticketMatches:TicketMatch[]
}

export function postMatchToTicket(ticketMatch:TicketMatch):IpostMatchToTicket{
    return{
        type:POST_MATCH_TO_TICKET,
        payload:ticketMatch
    }
}

export function showTicket(ticketMatches:TicketMatch[]):IshowTicket{
    return{
        type:SHOW_TICKET,
        ticketMatches:ticketMatches
    }
}