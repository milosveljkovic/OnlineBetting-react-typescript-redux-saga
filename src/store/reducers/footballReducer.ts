
import {Action} from 'redux';

import {SHOW_FOOTBALL_MATCHES,IshowFootballMatches, SET_FOOTBALL_MATCH_INITIAL_STATE, IsetFootballMatchInitialState} from '../actions/footballActions'

import {Football} from '../../models/Football'

const initialState:Football[]=[];

export function footballReducer(state:Football[]=initialState,action:Action){
    switch(action.type){
        case SHOW_FOOTBALL_MATCHES:
            console.log("SHOW_FOOTBALL_MATCHES");
            const {football_matches}=action as IshowFootballMatches;
            state=[...football_matches];
            return [...football_matches];
        case SET_FOOTBALL_MATCH_INITIAL_STATE:
                const {football_matches_is}=action as IsetFootballMatchInitialState;
            return [...football_matches_is]
        default:
            return state;
    }
}