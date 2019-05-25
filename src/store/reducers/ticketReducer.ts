import {Action} from 'redux';

import {SHOW_TICKET,IshowTicket} from '../actions/ticketActions';

import {TicketMatch} from '../../models/TicketMatch'

const initialState:TicketMatch[]=[
    {
        id:"1",
        title:"tekma",
        finalscore:"X",
        odd:5
    }
]


export function ticketReducer(state:TicketMatch[]=initialState,action:Action){
    switch(action.type){
        case SHOW_TICKET:
            console.log("SHOW_TICKET");
            const {ticketMatches}=action as IshowTicket;
            console.log("Ticket MAtches reducer:"+ticketMatches);
            state=[...state,...ticketMatches];
            console.log(state);
            return state;
        default:
            return state;
    }
}