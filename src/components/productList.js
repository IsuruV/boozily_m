import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, ListView, TouchableOpacity, Image, Picker } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Body, Text, Right } from 'native-base';
import { userUpdate, setUserLocation, fetchStores, fetchProductsByWineType, fetchProductsByType, resetProductList, filterProducts, determineFilterTypes } from '../actions';
import { Card, CardSection, Input } from './common';
import Product from './product';
import Filter from './filter';

class ProductList extends Component{
  constructor(props){
    super(props);
    var determinedItems = determineFilterTypes(props.navigation.state.params.subCategory)
    this.state={ items: determinedItems }
  }
  componentWillMount(){
    const { subCategory, type }  = this.props.navigation.state.params
    const { id } = this.props.selected_store
    if(type == 'WINE'){
      this.props.fetchProductsByWineType(id, subCategory);
    }else{
      this.props.fetchProductsByType(id, subCategory);
    }
    const {setParams} = this.props.navigation;
    setParams({user: this.props.user});
  }

  componentWillUnmount(){
    this.props.resetProductList();
  }

  static navigationOptions = ({ navigation  }) => {
         const { state } = navigation
         const { navigate } = navigation;
          if(state.params){
              return {
                  title: 'Boozly',
                  headerRight: state.params.user ? <Text onPress={()=> { navigate('Cart') } }>Cart</Text> : <Text>Login</Text>
              }
          }

      };

 //  static navigationOptions = {
 //     title: 'Boozly',
 //    //  headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
 //     headerRight: <Text>Login</Text>,
 //     headerStyle:{
 //         backgroundColor:'white',
 //     },
 // };

displayProducts(){
  const { navigate } = this.props.navigation;
  let products = this.props.products
  if(this.props.filtered_products.length > 0){
    products = this.props.filtered_products
  }
  // var products = filterProducts('Malbec',this.props.products).payload;
  if (products.length > 0){
    return(
    <List style={{flex:1}} dataArray={products}
    renderRow={(product) =>
        <ListItem style={{height:100}} onPress={()=> { navigate('Product', { product: product }) } }>
        <Thumbnail square size={200} style={{height:98}} source={{ uri:product.image_link ? product.image_link : 'https://orig00.deviantart.net/ebe0/f/2012/135/9/5/wine_bottle_blank_label_by_glammgramma-d4zxg39.png'}} />
        <Body>
        <Text>{product.name}</Text>
        </Body>
        <Right>
        <Text note>${product.price}</Text>
        </Right>
        </ListItem>
            }>
    </List>
      )
  }else{
    return <Text> Loading... </Text>
  }
}

  render(){
    return(
     <Content style={{flex:1, backgroundColor: 'white'}}>
      <Filter items={this.state.items}/>
       {this.displayProducts()}
     </Content>
    )
  }
}

const viewStyles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
  }
}

const mapStateToProps = state =>{
  const { productType } = state.modal;
  const { user } = state;
  const { selected_store, stores, products, filtered_products } = state.store;
  if (products.length > 0) return { productType, selected_store, stores, products, filtered_products };
  return { productType, selected_store, stores, products, filtered_products, user }
}

export default connect(mapStateToProps, { fetchProductsByWineType, fetchProductsByType, resetProductList } )(ProductList);
