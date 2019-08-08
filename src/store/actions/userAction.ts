import {Action} from 'redux';
import {User} from '../../models/User'

export const REGISTER="REGISTER";
export const REGISTER_SUCCESS="REGISTER_SUCCESS";
export const UPDATE_USER="UPDATE_USER";
export const SET_USER="SET_USER";
export const GET_USER_BY_ID="GET_USER_BY_ID";
export const GET_USER_BY_ID_SUCCESS="GET_USER_BY_ID_SUCCESS";

export interface Iregister extends Action{
    email:string,
    password:string
}

export interface IregisterSuccess extends Action{
    newUser:User
}

export interface IsetUser extends Action{
    User:User
}

export interface IupdateUser extends Action{
    User:User
}

export interface IgetUserById extends Action{
    UserId:number
}

export interface IgetUserByIdSuccess extends Action{
    currentUser:User[]
}

export function register (email:string,password:string):Iregister{
    return{
        type:REGISTER,
        email:email,
        password:password
    }
}

export function registerSuccess (newUser:User):IregisterSuccess{
    return{
        type:REGISTER_SUCCESS,
        newUser:newUser
    }
}

export function setUser (User:User):IsetUser{
    return{
        type:SET_USER,
        User:User
    }
}

export function updateUser (User:User):IupdateUser{
    return{
        type:UPDATE_USER,
        User:User
    }
}

export function getUserById (UserId:number):IgetUserById{
    return{
        type:GET_USER_BY_ID,
        UserId:UserId
    }
}

export function getUserByIdSuccess (currentUser:User[]):IgetUserByIdSuccess{
    return{
        type:GET_USER_BY_ID_SUCCESS,
        currentUser:currentUser
    }
}