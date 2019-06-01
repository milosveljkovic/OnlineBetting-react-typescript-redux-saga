import { MyTickets } from "../../models/MyTickets";
import { Action } from "redux";

import {SHOW_MYTICKETS,IshowMyTickets,UPDATE_MYTICKETS,IupdateMyTickets} from '../actions/myTicketAction'

const initialState:MyTickets[]=[
]

export function myTicketReducer(state:MyTickets[]=initialState,action:Action){
    switch(action.type){
        case SHOW_MYTICKETS:
            console.log("SHOW_MYTICKETS")
            const {myTickets}=action as IshowMyTickets
            return myTickets
        case UPDATE_MYTICKETS:
            console.log("UPDATE_MYTICKETS");
            const {myTicket}=action as IupdateMyTickets;
            state=[...state,myTicket];
            return state;
        default:
            return state;
    }
}