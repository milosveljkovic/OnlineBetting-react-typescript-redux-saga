import {Action} from 'redux';

import {SHOW_TICKET_MATCHES, IshowTicketMatches} from '../actions/ticketActions';

import {TicketMatch} from '../../models/TicketMatch'

const initialState:TicketMatch[]=[
]

export function ticketReducer(state:TicketMatch[]=initialState,action:Action){
    switch(action.type){
        case SHOW_TICKET_MATCHES:
            console.log("SHOW_TICKET_MATCHES");
            const {ticketMatches}=action as IshowTicketMatches;
            state=[...ticketMatches];
            return state;
        default:
            return state;
    }
}