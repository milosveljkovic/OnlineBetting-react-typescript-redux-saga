import {put} from 'redux-saga/effects';

import {showFootballMatches} from '../actions/footballActions';
import {getAllFootballMatches,updateMatchOdds} from '../../services/sport-service';
import {IupdateMatch} from '../actions/footballActions'

export function* fetchFootballMatches(){
    console.log("fetch football-matches");
    const football_matches=yield getAllFootballMatches();
    yield put(showFootballMatches(football_matches));
}

export function* update(match:IupdateMatch){
    console.log("update football-matches");
    yield updateMatchOdds(match.payload);
}