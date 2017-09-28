import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LocationGeoCoder from './components/locationGeoCoder';
import ProductSelections from './components/productSelections';

const RouterComponent = StackNavigator({
  locator: { screen: LocationGeoCoder },
  Products: { screen: ProductSelections }
})

export default RouterComponent;
