
import {TicketMatch} from './TicketMatch'

export interface MyTickets {
    id:number,
    userId:number,
    title:string,
    win:number,
    matches:TicketMatch[]
}