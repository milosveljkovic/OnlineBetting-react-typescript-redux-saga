import {TicketMatch} from '../models/TicketMatch';

const url="http://localhost:8001/ticket";

export function getTicketMatchesService(){
    return fetch(url).then((response)=>response.json());
}

export function postTicketMatchService(ticketMatch:TicketMatch){
    const newTicketMatch={
        method:"post",
        body: JSON.stringify(ticketMatch),
        headers:{'Content-Type':'application/json'},
    };
    fetch(url,newTicketMatch).then((response)=>response.json());
}

export function deleteMatchFromTicketService(ticketMatchId:string){
    const newTicketMatch={
        method:"delete",
        body: JSON.stringify({id:ticketMatchId}),
        headers:{'Content-Type':'application/json'},
    };
     fetch(`${url}/${ticketMatchId}`,newTicketMatch).then((response)=>response.json());
}