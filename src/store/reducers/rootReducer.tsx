import {combineReducers} from "redux";

import {Football} from '../../models/Football';
import {footballReducer} from './footballReducer';

export interface AppState{
    football_matches:Football[]
}

 const rootReducer=combineReducers({
    football_matches:footballReducer
})

export default rootReducer;