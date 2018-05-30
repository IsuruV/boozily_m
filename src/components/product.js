import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TextInput, ListView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { userUpdate, setUserLocation, fetchStores, closeModal, fetchProductsBySubType, fetchProductsByType, addProduct } from '../actions';
import { Card, CardSection, Input } from './common';
import { Button } from 'native-base';

let styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'white',
    flexDirection: 'column',
    position: 'relative',

  },
  productNameStyle: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  descriptionStyle:{
    paddingTop: 10,
    fontSize: 14
  }
})

class Product extends Component{

 componentWillMount(){
         const {setParams} = this.props.navigation;
         setParams({user: this.props.user});
 }

 static navigationOptions = ({ navigation  }) => {
        const { state } = navigation
        const { navigate } = navigation;
         if(state.params){
             return {
                 headerRight: state.params.user ? <Text onPress={()=> { navigate('Cart') } }>Cart</Text> : <Text>Login</Text>
             }
         }

     };

  render(){
    const { backgroundStyle, textStyle, productNameStyle, descriptionStyle } = styles;
    const { product } = this.props.navigation.state.params
    console.log(product)
    return(
      <ScrollView style={ backgroundStyle }>
        <Image style={{width: 300, height: 350}} source={{uri: product.image_link ? product.image_link : 'https://facebook.github.io/react/img/logo_og.png'}}/>
        <Text style={ productNameStyle }>{ product.name }</Text>
        <Text style={ descriptionStyle }>{ product.description }</Text>
        <Button full onPress={() => this.props.addProduct(product)}>
          <Text>Add to Cart</Text>
        </Button>
      </ScrollView>
    )
  }
}

const mapStateToProps = state =>{
  const { productType } = state.modal;
  const { selected_store, stores, products } = state.store;
  const { user } = state;
  return { productType, selected_store, stores, products, user };
}

export default connect(mapStateToProps, { closeModal, fetchProductsBySubType, fetchProductsByType, addProduct } )(Product);
