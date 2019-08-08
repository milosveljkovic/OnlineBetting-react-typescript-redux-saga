
import {User} from '../models/User'
const url='http://localhost:8000/users';

export function addNewUserService(User:User){
    const newUser={
        method:"post",
        body: JSON.stringify(User),
        headers:{'Content-Type':'application/json'},
    };
    return fetch(url,newUser).then((response)=>response.json())
}  

export function getUserWithEmailAndPassword(email:string,password:string){
    return fetch(`${url}?email=${email}&password=${password}`).then((response)=>response.json());
}

export function getUserByIdService(userId:number){
    return fetch(`${url}?id=${userId}`).then((response)=>response.json());
}

export function updateUserService(User:User){
    const newUser={
        method:"put",
        body: JSON.stringify(User),
        headers:{'Content-Type':'application/json'},
    };
    fetch(`${url}/${User.id}`,newUser).then((response)=>response.json())
} 