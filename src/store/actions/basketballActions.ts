import {Action} from 'redux';

import {Basketball} from '../../models/Basketball';

export const SHOW_BASKETBALL_MATCHES="SHOW_BASKETBALL_MATCHES";
export const FETCH_BASKETBALL_MATCHES="FETCH_BASKETBALL_MATCHES";
export const UPDATE_BASKETBALL_MATCH="UPDATE_BASKETBALL_MATCH";
export const PUT_BASKETBALL_MATCH_INITIAL_STATE="PUT_BASKETBALL_MATCH_INITIAL_STATE";
export const SET_BASKETBALL_MATCH_INITIAL_STATE="SET_BASKETBALL_MATCH_INITIAL_STATE";


export interface IshowBasketballMatches extends Action{
    basketball_matches:Basketball[]
}

export interface IfetchBasketballMatches extends Action{
    
}

export interface IupdateBasketballMatch extends Action{
    match:Basketball
}

export interface IputBasketballMatchInitialState extends Action{
    basketball_matches_is:Basketball[]
}

export interface IsetBasketballMatchInitialState extends Action{
    basketball_matches_is:Basketball[]
}

export function showBasketballMatches(basketball_matches:Basketball[]):IshowBasketballMatches{
    return{
        type:SHOW_BASKETBALL_MATCHES,
        basketball_matches:basketball_matches
    }
}

export function fetchBasketballMatches():IfetchBasketballMatches{
    return{
        type:FETCH_BASKETBALL_MATCHES
    }
}

export function updateBasketballMatch(match:Basketball):IupdateBasketballMatch{
    return{
        type:UPDATE_BASKETBALL_MATCH,
        match:match
    }
}

export function putBasketballMatchInitialState(basketball_matches_is:Basketball[]):IputBasketballMatchInitialState{
    return{
        type:PUT_BASKETBALL_MATCH_INITIAL_STATE,
        basketball_matches_is:basketball_matches_is
    }
}

export function setBasketballMatchInitialState(basketball_matches_is:Basketball[]):IsetBasketballMatchInitialState{
    return{
        type:SET_BASKETBALL_MATCH_INITIAL_STATE,
        basketball_matches_is:basketball_matches_is
    }
}