import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, ListView } from 'react-native';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { userUpdate, setUserLocation, fetchStores } from '../actions';
import { Card, CardSection, Input } from './common';
import ProductRow from './productRow';

class productSelections extends Component{
  static navigationOptions = {
     title: 'Boozly',
    //  headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
     headerRight: <Text>Login</Text>,
     headerStyle:{
         backgroundColor:'white',
     },
 };

  constructor() {
   super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8']),
    };
  }

 componentWillMount(){
   this.props.fetchStores(this.props.navigation.navigate.userLocation);
 }

 render(){
   return(
     <View>
      <Text>{this.props.stores}</Text>
      <ProductRow items={['Red', 'White', 'Sparkling']} title={'Wine'}/>
      <ProductRow items={['Vodka', 'Bourbon', 'Gin', 'Rum']} title={'Liquor'}/>
      <ProductRow items={['Mixers', 'Cups', 'Bitters']} title={'Extras'}/>
     </View>
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
