import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, ListView } from 'react-native';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { userUpdate, setUserLocation, fetchStores } from '../actions';
import { Card, CardSection, Input } from './common';

class ProductRow extends Component{

  constructor(props) {
   super(props);
    const { items } = props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(items),
    };
  }

 render(){
   return(
      <Card>
      <Text>{this.props.title}</Text>
        <CardSection>
        <ListView
          horizontal={true}
          style={{flex:1, paddingBottom: 10}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Card><CardSection styles={{marginTop: 20, marginBottom: 20, marginRight: 20, marginLeft: 20}}><Text>{rowData}</Text></CardSection></Card>}
          />
        </CardSection>
     </Card>
   )
 }

}

export default ProductRow;