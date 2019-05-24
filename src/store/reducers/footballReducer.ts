
import {Action} from 'redux';

import {SHOW_FOOTBALL_MATCHES,IshowFootballMatches} from '../actions/footballActions'

import {Football} from '../../models/Football'

const initialState:Football[]=[
    {
        id:4,
        title:"DUBOCICA-GORNJI JOVANOVAC",
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