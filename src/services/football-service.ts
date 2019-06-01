import {Football} from '../models/Football';
const url='http://localhost:8000/football';


export function getAllFootballMatches(){
    return fetch(url)
        .then(response=>response.json());
}

export function updateFootballMatchOdds(match:Football){
    const newMatch={
        method:"put",
        headers:new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(match)
    };
    fetch(`${url}/${match.id}`,newMatch);
}

export function putInitialStateFootballMatchService(matches:Football[]){

    var i=500
    matches.map((match)=>{
        setTimeout(()=>{
            const newMatch={
                method:"PUT",
                headers:new Headers({'Content-Type':'application/json'}),
                body: JSON.stringify(match)
            };
            fetch(`${url}/${match.id}`,newMatch)}
            ,i+=500)
    })
}
    