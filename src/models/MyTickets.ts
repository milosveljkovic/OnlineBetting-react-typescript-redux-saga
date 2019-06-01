
import {TicketMatch} from './TicketMatch'

export interface MyTickets {
    id:number,
    title:string,
    win:number,
    matches:TicketMatch[]
}