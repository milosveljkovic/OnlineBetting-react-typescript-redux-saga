
const url='http://localhost:8000/basketball';

export function getAllBasketballMatches(){
    return fetch(url)
        .then(response=>response.json());
}