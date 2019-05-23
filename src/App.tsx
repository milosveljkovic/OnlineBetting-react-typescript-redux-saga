import './App.css';

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import {rootSaga} from './store/sagas/rootSaga';

import rootReducer from "./store/reducers/rootReducer"
import FootballPage from './components/SportsPages/FootballPage'
import Navigationbar from './components/Navbar/Navigationbar';

const sagaMiddleware=createSagaMiddleware();

const store=createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(rootSaga)


class App extends React.Component {

  render(){
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <Navigationbar></Navigationbar>
        <Switch>
          <Route path="/football" component={FootballPage}/>
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
  }
}  

export default App;
