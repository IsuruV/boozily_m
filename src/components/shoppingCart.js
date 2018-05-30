import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput } from 'react-native';
import { addProduct, removeProduct, productCount } from '../actions';
import { Container, Content, List, ListItem, Thumbnail, Body, Text, Right, Button, Icon } from 'native-base';


class ShoppingCart extends Component{
  static navigationOptions = {
     title: 'Cart',
    //  headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
     headerStyle:{
         backgroundColor:'white',
     },
 };

 renderCartItems(){
   let itemArr = [];
   const { items } = this.props;
   let groupedItems = productCount(items, (item)=> item.id);
   Object.keys(groupedItems).forEach(function (key) {
     let value = groupedItems[key]
     itemArr.push(value)
  })
  return itemArr
 }

 render(){
  const { navigate } = this.props.navigation;
   return(
     <Content style={{flex:1, backgroundColor: 'white'}}>
      <Text> Empty Cart </Text>
      <List style={{flex:1}} dataArray={this.renderCartItems()}
      renderRow={(product) =>
          <ListItem style={{flex:1}} onPress={()=> { navigate('Product', { product: product.item }) } }>
          <Thumbnail square size={200} style={{height:98}} source={{ uri:product.item.image_link ? product.item.image_link : 'https://orig00.deviantart.net/ebe0/f/2012/135/9/5/wine_bottle_blank_label_by_glammgramma-d4zxg39.png'}} />
          <Body>
          <Text>{product.item.name}</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button light onPress={() => this.props.addProduct(product.item)}>
              <Icon name='arrow-up' />
            </Button>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize:20}}>{product.count}</Text>
            </View>
            <Button light onPress={() => this.props.removeProduct(product.item)}>
              <Icon name='arrow-down' />
            </Button>
          </View>
          </Body>
          <Right>
          <Text note>${product.item.price}</Text>
          </Right>
          </ListItem>
              }>
      </List>
     </Content>
   )
 }
}




const mapStateToProps = state =>{
  const { items } = state.cart;
  return { items };
}
export default connect(mapStateToProps, { addProduct, removeProduct } )(ShoppingCart);
