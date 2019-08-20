import './App.css';

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {Switch,Route,Router} from 'react-router-dom';
import {rootSaga} from './store/sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./store/reducers/rootReducer"
import Navigationbar from './components/Navbar/Navigationbar';
import Home from './components/Home/Home'

import {fetchBasketballMatches} from './store/actions/basketballActions';
import {fetchFootballMatches} from './store/actions/footballActions';
import {getUserById} from './store/actions/userAction'

import routes from './routes'
import history from './history';

const sagaMiddleware=createSagaMiddleware();

const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(rootSaga)

class App extends React.Component {

  getRoutes = (routes:any) =>{
    return routes.map((prop:any, key:any) => {
        return (
          <Route path={prop.path}
            component={prop.component}
            key={key}
          />
        );
    });
  }


  render(){
    
    store.dispatch(fetchBasketballMatches());
    store.dispatch(fetchFootballMatches());
    if(localStorage.getItem("LoggedSuccess")==="true"){
      store.dispatch(getUserById(Number(localStorage.getItem("UserId"))));
    }
    
  return (
    <Provider store={store}> 
    <div>
      
      <Router history={history}>
        <Navigationbar></Navigationbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          {
            this.getRoutes(routes)
          }
        </Switch>
      </Router>
    </div>
    </Provider>
  );
  }
}  

export default App;
