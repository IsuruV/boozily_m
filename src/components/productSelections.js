import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { userUpdate, setUserLocation, fetchStores } from '../actions';
import { Card, CardSection, Input } from './common';

class productSelections extends Component{
  static navigationOptions = {
     title: 'Boozly',
    //  headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
     headerRight: <Text>Login</Text>,
     headerStyle:{
         backgroundColor:'white',
     },
 };

 componentWillMount(){
   this.props.fetchStores(this.props.navigation.navigate.userLocation);
 }

 render(){
   return(
     <Text>{this.props.stores}</Text>
   )
 }

}

const mapStateToProps = state =>{
  console.log(state);
  const { stores, selected_store, products } = state.store;
  if(stores.length == 0){
    return {stores: 'Loading..'}
  }else{
    return {stores: stores[0].address}
  }
}
export default connect(mapStateToProps, { fetchStores } )(productSelections);
