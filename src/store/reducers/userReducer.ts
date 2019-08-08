import {Action} from 'redux';

import {REGISTER_SUCCESS,IregisterSuccess, IsetUser, SET_USER,IgetUserByIdSuccess,GET_USER_BY_ID_SUCCESS} from '../actions/userAction';

import {User} from '../../models/User'

const initialState:User={
    id:-1,
    email:"",
    password:"",
    credit:0,
    userOrAdmin:""
}

export function userReducer(state:User=initialState,action:Action){
    switch(action.type){
        case REGISTER_SUCCESS:
            console.log("REGISTER_SUCCESS");
            const {newUser}= action as IregisterSuccess;
            return newUser;
        case SET_USER:
            console.log("SET_USER");
            const {User}=action as IsetUser;
            return User;
        case GET_USER_BY_ID_SUCCESS:
            console.log("GET_USER_BY_ID_SUCCESS");
            const {currentUser}=action as IgetUserByIdSuccess;
            console.log(currentUser);
            return currentUser[0];
        default:
            return state;
    }
}