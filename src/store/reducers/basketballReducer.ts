
import {Action} from 'redux';

import {SHOW_BASKETBALL_MATCHES,IshowBasketballMatches,SET_BASKETBALL_MATCH_INITIAL_STATE,IsetBasketballMatchInitialState} from '../actions/basketballActions'

import {Basketball} from '../../models/Basketball'

const initialState:Basketball[]=[];

export function basketballReducer(state:Basketball[]=initialState,action:Action){
    switch(action.type){
        case SHOW_BASKETBALL_MATCHES:
            console.log("SHOW_BASKETBALL_MATCHES");
            const {basketball_matches}=action as IshowBasketballMatches;
            state=[...basketball_matches];
            return [...basketball_matches];
        case SET_BASKETBALL_MATCH_INITIAL_STATE:
                const {basketball_matches_is}=action as IsetBasketballMatchInitialState;
            return [...basketball_matches_is]
        default:
            return state;
    }
}