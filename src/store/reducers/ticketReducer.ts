import {Action} from 'redux';

import {SET_INITIAL_STATE, ADD_MATCH_TO_TICKET, IaddMatchToTicket, IremoveMatchFromTicket, REMOVE_MATCH_FROM_TICKET} from '../actions/ticketActions';

import {TicketMatch} from '../../models/TicketMatch'

const initialState:TicketMatch[]=[
]

export function ticketReducer(state:TicketMatch[]=initialState,action:Action){
    switch(action.type){
        case ADD_MATCH_TO_TICKET:
            console.log("ADD_MATCH_TO_TICKET");
            const {ticketMatch}= action as IaddMatchToTicket;
            return [...state,ticketMatch];
        case REMOVE_MATCH_FROM_TICKET:
            console.log("REMOVE_MATCH_FROM_TICKET");
            const {ticketMatchId}=action as IremoveMatchFromTicket;
            return state.filter(match=>match.id!==ticketMatchId);
        case SET_INITIAL_STATE:
            console.log("SET_INITIAL_STATE");
            return []
        default:
            return state;
    }
}