
import {Action} from 'redux';

import {SHOW_BASKETBALL_MATCHES,IshowBasketballMatches} from '../actions/basketballActions'

import {Basketball} from '../../models/Basketball'

const initialState:Basketball[]=[
    {
        id:4,
        title:"KKCZV-KKP",
        odds:[
            {
                value:1,
                finalscore:"1",
                includedodds:false
            },
            {
                value:2,
                finalscore:"X",
                includedodds:false
            },
            {
                value:3,
                finalscore:"2",
                includedodds:false
            }
        ]
    }
];

export function basketballReducer(state:Basketball[]=initialState,action:Action){
    switch(action.type){
        case SHOW_BASKETBALL_MATCHES:
            console.log("SHOW_BASKETBALL_MATCHES");
            const {basketball_matches}=action as IshowBasketballMatches;
            state=[...basketball_matches];
            return [...basketball_matches];
        default:
            return state;
    }
}