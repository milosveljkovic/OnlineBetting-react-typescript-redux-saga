
import {Action} from 'redux';

import {SHOW_FOOTBALL_MATCHES,IshowFootballMatches,UPDATE_FOOTBALL_MATCH, IupdateFootballMatch} from '../actions/footballActions'

import {Football} from '../../models/Football'

const initialState:Football[]=[];

export function footballReducer(state:Football[]=initialState,action:Action){
    switch(action.type){
        case SHOW_FOOTBALL_MATCHES:
            const {football_matches}=action as IshowFootballMatches;
            return [...football_matches];
        case UPDATE_FOOTBALL_MATCH:
                const {match} = action as IupdateFootballMatch
                state.map(footballmatch=>{
                    if(footballmatch.id===match.id){footballmatch=match}
                })
                return state;
        default:
            return state;
    }
}
