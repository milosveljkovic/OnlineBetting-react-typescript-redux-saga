import {combineReducers} from "redux";

import {Football} from '../../models/Football';
import {footballReducer} from './footballReducer';
import {TicketMatch} from '../../models/TicketMatch'
import {ticketReducer} from './ticketReducer';

export interface AppState{
    football_matches:Football[],
    ticket_matches:TicketMatch[]
}

 const rootReducer=combineReducers({
    football_matches:footballReducer,
    ticket_matches:ticketReducer
})

export default rootReducer;