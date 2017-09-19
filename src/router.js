import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = ()=>{
  return(
    <Router sceneStyle={{paddingTop:1}}>
      <Scene key="root">
      </Scene>
    </Router>
  )
};

export default RouterComponent;
