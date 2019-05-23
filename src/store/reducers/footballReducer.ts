
import {Action} from 'redux';

import {SHOW_FOOTBALL_MATCHES,IshowFootballMatches} from '../actions/footballActions'
import {Football} from '../../models/Football'

const initialState:Football[]=[
    {
        id:4,
        title:"ZVEZDA-PARTIZAN",
        odds:[
            {
                value:1,
                finalscore:"1"
            },
            {
                value:2,
                finalscore:"X"
            },
            {
                value:3,
                finalscore:"2"
            }
        ]
    }
];

export function footballReducer(state:Football[]=initialState,action:Action){
    switch(action.type){
        case SHOW_FOOTBALL_MATCHES:
            console.log("SHOW_FOOTBALL_MATCHES");
            const {football_matches}=action as IshowFootballMatches;
            state=[...football_matches];
            return [...football_matches];
        default:
            return state;
    }
}