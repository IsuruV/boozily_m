import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import Geocoder from 'react-native-geocoding';
import { userUpdate, setUserLocation } from '../actions';
import { Card, CardSection, Input } from './common';

class LocationGeoCoder extends Component{

  static navigationOptions = {
     title: 'Location',
     headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
     headerStyle:{
         backgroundColor:'white',
     },
 };

componentWillMount() {
  this.getCoordinates();
}

componentDidMount(){
  this.getCoordinates();
}

getLocation(result){
  Geocoder.setApiKey('AIzaSyDqVBtpgKAI-87CQqAgzaATf3rgRolg6Uo');
  Geocoder.getFromLatLng(result[0], result[1]).then(
      json => {
        console.log("LOGGED");
        console.log(json.results);
        var address_component = json.results[0].formatted_address;
        console.log(address_component);
        this.props.setUserLocation({lat: result[0], lng: result[1], location: address_component})
        userUpdate
      },
      error => {
        console.log(error);
      }
    );
}

getCoordinates() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
     return this.getLocation([position.coords.latitude, position.coords.longitude])
    },
    (error) => console.log(error.message),
    {enableHighAccuracy: true, timeout: 20000}
  )
}

  render(){
    return(
      <Card>
        <CardSection>
          <TextInput
            style={inputStyle}
            value={this.props.location}
            onChangeText={(val) => this.props.userUpdate({prop: 'location', value: val}) }/>
        </CardSection>
      </Card>
    )
  }
}

const inputStyle = {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 13,
    lineHeight: 28,
    flex: 2
}

const mapStateToProps = state =>{
  const { late, lng, location } = state.user;
  return { late, lng, location };
}
export default connect(mapStateToProps, { userUpdate, setUserLocation } )(LocationGeoCoder);
