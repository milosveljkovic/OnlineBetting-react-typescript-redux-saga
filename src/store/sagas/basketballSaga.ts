import {put} from 'redux-saga/effects';

import {showBasketballMatches} from '../actions/basketballActions';
import {getAllBasketballMatches,updateBasketballMatchOdds} from '../../services/basketball-service';
import {IupdateBasketballMatch} from '../actions/basketballActions'

export function* fetchBasketballMatches(){
    console.log("fetch football-matches");
    const basketball_matches=yield getAllBasketballMatches();
    yield put(showBasketballMatches(basketball_matches));
}

export function* updateBasketballMatch(match:IupdateBasketballMatch){
    console.log("update basketball-matches");
    yield updateBasketballMatchOdds(match.match);
}