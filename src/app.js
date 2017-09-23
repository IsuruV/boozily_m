import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './router';

class App extends Component{
  render(){
    return(
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <RouterComponent/>
      </Provider>
    )
  }
}

export default App;
