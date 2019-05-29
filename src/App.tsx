import './App.css';

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import {rootSaga} from './store/sagas/rootSaga';

import rootReducer from "./store/reducers/rootReducer"
import FootballPage from './components/SportsPages/FootballPage'
import BasketballPage from './components/SportsPages/BasketballPage'
import Navigationbar from './components/Navbar/Navigationbar';
import Ticket from './components/Ticket/Ticket';
import Home from './components/Home/Home'

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
      <Navigationbar></Navigationbar>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/football" component={FootballPage}/>
          <Route path="/basketball" component={BasketballPage}/>
          <Route path="/ticket" component={Ticket}/>
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
  }
}  

export default App;
