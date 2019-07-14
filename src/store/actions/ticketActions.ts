import {Action} from 'redux';

import {TicketMatch} from '../../models/TicketMatch'

export const ADD_MATCH_TO_TICKET="ADD_MATCH_TO_TICKET";
export const REMOVE_MATCH_FROM_TICKET="REMOVE_MATCH_FROM_TICKET";
export const SET_INITIAL_STATE="SET_INITIAL_STATE";


export interface IaddMatchToTicket extends Action{
    ticketMatch:TicketMatch
}

export interface IremoveMatchFromTicket extends Action{
    ticketMatchId:string
}

export interface IsetTicketIntialState extends Action{
}

export function addMatchToTicket(ticketMatch:TicketMatch):IaddMatchToTicket{
    return{
        type:ADD_MATCH_TO_TICKET,
        ticketMatch:ticketMatch
    }
}

export function removeMatchFromTicket(ticketMatchId:string):IremoveMatchFromTicket{
    return{
        type:REMOVE_MATCH_FROM_TICKET,
        ticketMatchId:ticketMatchId
    }
}

export function setTicketIntialState():IsetTicketIntialState{
    return{
        type:SET_INITIAL_STATE
    }
}