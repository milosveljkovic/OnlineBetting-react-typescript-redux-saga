import {put} from 'redux-saga/effects';

import {showFootballMatches, IputFootballMatchInitialState, setFootballMatchInitialState} from '../actions/footballActions';
import {getAllFootballMatches,updateFootballMatchOdds,putInitialStateFootballMatchService} from '../../services/football-service';
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

export function* putFootballMatchInitialState(matches:IputFootballMatchInitialState){
    yield putInitialStateFootballMatchService(matches.football_matches_is);
    yield put(setFootballMatchInitialState(matches.football_matches_is));
}