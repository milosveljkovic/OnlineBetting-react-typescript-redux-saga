import {TicketMatch} from '../models/TicketMatch';

const url="http://localhost:8001/ticket";

export function postTicketMatchService(ticketMatch:TicketMatch){
    const newTicketMatch={
        method:"post",
        headers:new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(ticketMatch)
    };
    return fetch(url,newTicketMatch).then((responese)=>responese.json());
}