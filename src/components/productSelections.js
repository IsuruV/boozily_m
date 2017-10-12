import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchStores } from '../actions';
import { Card, CardSection, Input } from './common';
import ProductRow from './productRow';
import DrillDown from './drillDown';

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
     <View>
      <Text style={{fontWeight: 'bold'}}>Selected Store: {this.props.stores.name}</Text>
        <ProductRow items={['Red', 'White', 'Bubbly']} title={'Wine'}/>
        <ProductRow items={['Vodka', 'Bourbon', 'Gin', 'Rum']} title={'Liquor'}/>
        <ProductRow items={['Mixers', 'Cups', 'Bitters']} title={'Extras'}/>
       <DrillDown/>
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
    return {stores: stores[0]}
  }
}
export default connect(mapStateToProps, { fetchStores } )(productSelections);
