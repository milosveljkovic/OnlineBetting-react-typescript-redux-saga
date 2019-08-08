const url='http://localhost:8000/football';

export function getAllFootballMatches(){
    return fetch(url)
        .then(response=>response.json());
}  