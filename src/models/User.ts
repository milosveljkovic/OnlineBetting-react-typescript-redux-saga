import { TicketMatch } from "./TicketMatch";

export interface User {
    id:number,
    email:string,
    password:string,
    credit:number,
    userOrAdmin:string
}