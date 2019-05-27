import {Action} from 'redux';

import {Football} from '../../models/Football';

export const SHOW_FOOTBALL_MATCHES="SHOW_FOOTBALL_MATCHES";
export const FETCH_FOOTBALL_MATCHES="FETCH_FOOTBALL_MATCHES";
export const UPDATE_FOOTBALL_MATCH="UPDATE_FOOTBALL_MATCH";

export interface IshowFootballMatches extends Action{
    football_matches:Football[]
}

export interface IfetchFootballMatches extends Action{
    
}

export interface IupdateFootballMatch extends Action{
    match:Football
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