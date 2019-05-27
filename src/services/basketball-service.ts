import {Basketball} from '../models/Basketball';

const url='http://localhost:8000/basketball';

export function getAllBasketballMatches(){
    return fetch(url)
        .then(response=>response.json());
}

export function updateBasketballMatchOdds(match:Basketball){
    const newMatch={
        method:"put",
        headers:new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(match)
    };
    fetch(`${url}/${match.id}`,newMatch);
}