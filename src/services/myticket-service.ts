
import {MyTickets} from '../models/MyTickets';

const url="http://localhost:8002/mytickets";

export function postTicketToMyTicketService(ticket:MyTickets){
    const newTicketMatch={
        method:"post",
        body: JSON.stringify(ticket),
        headers:{'Content-Type':'application/json'},
    };
    return fetch(url,newTicketMatch).then((response)=>response.json())
}

export function fetchMyTicketsService(userId:number){
    return fetch(`${url}?userId=${userId}`)
    .then(response=>response.json());
}