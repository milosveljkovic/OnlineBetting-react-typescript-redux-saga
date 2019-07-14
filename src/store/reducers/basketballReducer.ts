
import {Action} from 'redux';

import {SHOW_BASKETBALL_MATCHES,IshowBasketballMatches, UPDATE_BASKETBALL_MATCH, IupdateBasketballMatch} from '../actions/basketballActions'

import {Basketball} from '../../models/Basketball'

const initialState:Basketball[]=[];

export function basketballReducer(state:Basketball[]=initialState,action:Action){
    switch(action.type){
        case SHOW_BASKETBALL_MATCHES:
            const {basketball_matches}=action as IshowBasketballMatches;
            return [...basketball_matches];
        case UPDATE_BASKETBALL_MATCH:
            const {match} = action as IupdateBasketballMatch
            state.map(basketballmatch=>{
                if(basketballmatch.id===match.id){basketballmatch=match}
            })
            return state;
        default:
            return state;
    }
}