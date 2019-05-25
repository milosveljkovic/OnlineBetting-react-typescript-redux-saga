import {Action} from 'redux';

import {TicketMatch} from '../../models/TicketMatch'

export const POST_MATCH_TO_TICKET="POST_MATCH_TO_TICKET";
export const DELETE_MATCH_FROM_TICKET="DELETE_MATCH_FROM_TICKET";
export const SHOW_TICKET="SHOW_TICKET";


export interface IpostMatchToTicket extends Action{
    ticketMatch:TicketMatch
}

export interface IdeleteMatchFromTicket extends Action{
    ticketMatchId:string
}

export interface IshowTicket extends Action{
    ticketMatches:TicketMatch[]
}

export function postMatchToTicket(ticketMatch:TicketMatch):IpostMatchToTicket{
    return{
        type:POST_MATCH_TO_TICKET,
        ticketMatch:ticketMatch
    }
}

export function deleteMatchFromTicket(ticketMatchId:string):IdeleteMatchFromTicket{
    return{
        type:DELETE_MATCH_FROM_TICKET,
        ticketMatchId:ticketMatchId
    }
}

export function showTicket(ticketMatches:TicketMatch[]):IshowTicket{
    return{
        type:SHOW_TICKET,
        ticketMatches:ticketMatches
    }
}