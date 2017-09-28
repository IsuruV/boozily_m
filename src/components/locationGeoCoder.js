import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { userUpdate, setUserLocation, fetchStores } from '../actions';
import { Card, CardSection, Input } from './common';

class LocationGeoCoder extends Component{

  static navigationOptions = {
     title: 'Boozly',
    //  headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
     headerRight: <Text>Login</Text>,
     headerStyle:{
         backgroundColor:'white',
     },
 };

 componentWillMount() {
   this.getCoordinates();
  }
  
  getCoordinates() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.props.setUserLocation({lat: position.coords.latitude, lng: position.coords.longitude})
      },
      (error) => console.log(error.message),
      {enableHighAccuracy: true, timeout: 20000}
    )
  }

  render(){
    const { setUserLocation, fetchStores } = this.props
    const { navigate } = this.props.navigation;
    return(
      <Card>
        <CardSection>
            <GooglePlacesAutocomplete
              enablePoweredByContainer={false}
              placeholder='Enter Your Address'
              minLength={2}
              autoFocus={true}
              returnKeyType={'search'}
              listViewDisplayed='auto'
              fetchDetails={true}
              renderDescription={(row) => row.description}
              onPress={(data, details = null) => {
                console.log(data);
                console.log(details);
              setUserLocation({lat: details.geometry.location.lat, lng: details.geometry.location.lng, location: details.formatted_address })
              // fetchStores(details.formatted_address).then((result)
              navigate('Products', { userLocation: details.formatted_address })
        }}

          query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyCe2TNPbV4Y7NmbgLKRK3JxF6tEDj8CaWo',
            language: 'en',
            types: 'address'
          }}
          styles={{
            description: {
              fontWeight: 'bold'
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            }
          }}

          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={200}
        />
      </CardSection>
    </Card>
      )
  }
}

const mapStateToProps = state =>{
  const { late, lng, location } = state.user;
  return { late, lng, location };
}
export default connect(mapStateToProps, { userUpdate, setUserLocation, fetchStores } )(LocationGeoCoder);
