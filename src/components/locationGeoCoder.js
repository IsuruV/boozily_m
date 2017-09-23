import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LocationGeoCoder extends Component{

  static navigationOptions = {
     title: 'Location',
     headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
     headerStyle:{
         backgroundColor:'white',
     },
 };

 constructor() {
  super();
  this.state = {
    userLat: '',
    userLng: '',
    userCount: 0,
  }
}

componentWillMount() {
  this.getLocation();
}


getLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      this.setState({
        userLat: position.coords.latitude,
        userLng: position.coords.longitude
      })
    },
    (error) => console.log(error.message),
    {enableHighAccuracy: true, timeout: 20000}
  )
}

  render(){
    return(
      <View>
        <Text>Lat: {this.state.userLat}</Text>
        <Text>Lat: {this.state.userLng}</Text>
      </View>
    )
  }
}

export default LocationGeoCoder;
