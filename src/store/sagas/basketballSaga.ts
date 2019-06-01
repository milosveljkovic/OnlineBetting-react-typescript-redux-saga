import {put} from 'redux-saga/effects';

import {showBasketballMatches, IputBasketballMatchInitialState} from '../actions/basketballActions';
import {getAllBasketballMatches,updateBasketballMatchOdds,putInitialStateBasketballMatchService} from '../../services/basketball-service';
import {IupdateBasketballMatch,setBasketballMatchInitialState} from '../actions/basketballActions'

export function* fetchBasketballMatches(){
    console.log("fetch football-matches");
    const basketball_matches=yield getAllBasketballMatches();
    yield put(showBasketballMatches(basketball_matches));
}

export function* updateBasketballMatch(match:IupdateBasketballMatch){
    console.log("update basketball-matches");
    yield updateBasketballMatchOdds(match.match);
}

export function* putBasketballMatchInitialState(matches:IputBasketballMatchInitialState){
    yield putInitialStateBasketballMatchService(matches.basketball_matches_is);
    yield put(setBasketballMatchInitialState(matches.basketball_matches_is));
}