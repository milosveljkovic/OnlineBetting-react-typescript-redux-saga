import {Action} from 'redux';

import {Basketball} from '../../models/Basketball';

export const SHOW_BASKETBALL_MATCHES="SHOW_BASKETBALL_MATCHES";
export const FETCH_BASKETBALL_MATCHES="FETCH_BASKETBALL_MATCHES";
export const UPDATE_BASKETBALL_MATCH="UPDATE_BASKETBALL_MATCH";


export interface IshowBasketballMatches extends Action{
    basketball_matches:Basketball[]
}

export interface IfetchBasketballMatches extends Action{
    
}

export interface IupdateBasketballMatch extends Action{
    match:Basketball
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