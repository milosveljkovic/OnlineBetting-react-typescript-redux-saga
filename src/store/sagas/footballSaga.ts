import {put} from 'redux-saga/effects';

import {showFootballMatches} from '../actions/footballActions';
import {getAllFootballMatches,updateFootballMatchOdds} from '../../services/football-service';
import {IupdateFootballMatch} from '../actions/footballActions'

export function* fetchFootballMatches(){
    console.log("fetch football-matches");
    const football_matches=yield getAllFootballMatches();
    yield put(showFootballMatches(football_matches));
}

export function* updateFootballMatch(match:IupdateFootballMatch){
    console.log("update football-matches");
    yield updateFootballMatchOdds(match.match);
}