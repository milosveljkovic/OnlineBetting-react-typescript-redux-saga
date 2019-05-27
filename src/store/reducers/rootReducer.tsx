import {combineReducers} from "redux";

import {Football} from '../../models/Football';
import {footballReducer} from './footballReducer';
import {Basketball} from '../../models/Basketball';
import {basketballReducer} from './basketballReducer';
import {TicketMatch} from '../../models/TicketMatch'
import {ticketReducer} from './ticketReducer';

export interface AppState{
    football_matches:Football[],
    basketball_matches:Basketball[],
    ticket_matches:TicketMatch[]
}

 const rootReducer=combineReducers({
    football_matches:footballReducer,
    basketball_matches:basketballReducer,
    ticket_matches:ticketReducer
})

export default rootReducer;