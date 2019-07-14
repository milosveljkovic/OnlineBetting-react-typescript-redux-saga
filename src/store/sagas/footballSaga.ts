import {put} from 'redux-saga/effects';

import {showFootballMatches} from '../actions/footballActions';
import {getAllFootballMatches} from '../../services/football-service';

export function* fetchFootballMatches(){
    console.log("fetch football-matches");
    const football_matches=yield getAllFootballMatches();
    yield put(showFootballMatches(football_matches));
}

