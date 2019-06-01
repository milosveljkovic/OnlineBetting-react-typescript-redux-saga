import {Action} from 'redux';

import {TicketMatch} from '../../models/TicketMatch'

export const POST_MATCH_TO_TICKET="POST_MATCH_TO_TICKET";
export const DELETE_MATCH_FROM_TICKET="DELETE_MATCH_FROM_TICKET";
export const SHOW_TICKET_MATCHES="SHOW_TICKET_MATCHES";
export const FETCH_TICKET_MATCHES="FETCH_TICKET_MATCHES";
export const PUT_INITIAL_STATE="PUT_INITIAL_STATE";
export const SET_INITIAL_STATE="SET_INITIAL_STATE";


export interface IpostMatchToTicket extends Action{
    ticketMatch:TicketMatch
}

export interface IdeleteMatchFromTicket extends Action{
    ticketMatchId:string
}

export interface IshowTicketMatches extends Action{
    ticketMatches:TicketMatch[]
}

export interface IfetchTicketMatches extends Action{
}

export interface IputIntialState extends Action{
    ticketMatches:TicketMatch[]
}

export interface IsetIntialState extends Action{
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

export function showTicketMatches(ticketMatches:TicketMatch[]):IshowTicketMatches{
    return{
        type:SHOW_TICKET_MATCHES,
        ticketMatches:ticketMatches
    }
}

export function fetchTicketMatches():IfetchTicketMatches{
    return{
        type:FETCH_TICKET_MATCHES
    }
}

export function putIntialState(ticketMatches:TicketMatch[]):IputIntialState{
    return{
        type:PUT_INITIAL_STATE,
        ticketMatches:ticketMatches
    }
}

export function setIntialState():IsetIntialState{
    return{
        type:SET_INITIAL_STATE
    }
}