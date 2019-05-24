import {Action} from 'redux';

import {SHOW_TICKET,IshowTicket} from '../actions/ticketActions';

import {TicketMatch} from '../../models/TicketMatch'

const initialState:TicketMatch[]=[
    {
        id:1,
        title:"tekma",
        finalscore:"X",
        odd:5
    }
]


export function ticketReducer(state:TicketMatch[]=initialState,action:Action){
    switch(action.type){
        case SHOW_TICKET:
            console.log("SHOW_TICKET");
            //const {ticketMatchs}
        default:
            return state;
    }
}