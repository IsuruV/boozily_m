import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/loginForm';
import Router from './router';
import { Scene, Router } from 'react-native-router-flux';

class App extends Component{
  render(){
    return(
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router/>
      </Provider>
    )
  }
}

export default App;
