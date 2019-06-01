import {Action} from 'redux';

import {Football} from '../../models/Football';

export const SHOW_FOOTBALL_MATCHES="SHOW_FOOTBALL_MATCHES";
export const FETCH_FOOTBALL_MATCHES="FETCH_FOOTBALL_MATCHES";
export const UPDATE_FOOTBALL_MATCH="UPDATE_FOOTBALL_MATCH";
export const PUT_FOOTBALL_MATCH_INITIAL_STATE="PUT_FOOTBALL_MATCH_INITIAL_STATE";
export const SET_FOOTBALL_MATCH_INITIAL_STATE="SET_FOOTBALL_MATCH_INITIAL_STATE";


export interface IshowFootballMatches extends Action{
    football_matches:Football[]
}

export interface IfetchFootballMatches extends Action{
    
}

export interface IupdateFootballMatch extends Action{
    match:Football
}

export interface IputFootballMatchInitialState extends Action{
    football_matches_is:Football[]
}

export interface IsetFootballMatchInitialState extends Action{
    football_matches_is:Football[]
}

export function showFootballMatches(football_matches:Football[]):IshowFootballMatches{
    return{
        type:SHOW_FOOTBALL_MATCHES,
        football_matches:football_matches
    }
}

export function fetchFootballMatches():IfetchFootballMatches{
    return{
        type:FETCH_FOOTBALL_MATCHES
    }
}

export function updateFootballMatch(match:Football):IupdateFootballMatch{  //update footballMatch
    return{
        type:UPDATE_FOOTBALL_MATCH,
        match:match
    }
}

export function putFootballMatchInitialState(football_matches_is:Football[]):IputFootballMatchInitialState{
    return{
        type:PUT_FOOTBALL_MATCH_INITIAL_STATE,
        football_matches_is:football_matches_is
    }
}

export function setFootballMatchInitialState(football_matches_is:Football[]):IsetFootballMatchInitialState{
    return{
        type:SET_FOOTBALL_MATCH_INITIAL_STATE,
        football_matches_is:football_matches_is
    }
}