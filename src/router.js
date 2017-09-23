import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LocationGeoCoder from './components/locationGeoCoder';


const RouterComponent = StackNavigator({
  locator: { screen: LocationGeoCoder},
})

export default RouterComponent;
