import {put} from 'redux-saga/effects';

import {showBasketballMatches} from '../actions/basketballActions';
import {getAllBasketballMatches} from '../../services/basketball-service';

export function* fetchBasketballMatches(){
    console.log("fetch football-matches");
    const basketball_matches=yield getAllBasketballMatches();
    yield put(showBasketballMatches(basketball_matches));
}
