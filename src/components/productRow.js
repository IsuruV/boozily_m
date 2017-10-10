import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, TouchableOpacity } from 'react-native';
import { openModal } from '../actions';
import { Card, CardSection } from './common';

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
  const { cardStyle, opacityStyle } = rowStyles;
   return(
      <Card>
      <Text style={{fontWeight: 'bold'}}>{this.props.title}</Text>
        <CardSection>
        <ListView
          horizontal={true}
          style={{flex:1, paddingBottom: 10}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
          <TouchableOpacity onPress={() => { this.props.openModal(this.state.dataSource) }} hitSlop={opacityStyle}>
            <View>
                <Card>
                  <CardSection styles={cardStyle}>
                    <Text style={{textAlign: 'center'}} adjustsFontSizeToFit={true}>{rowData}</Text>
                  </CardSection>
                 </Card>
            </View>
          </TouchableOpacity>
          }
          />
        </CardSection>
     </Card>
   )
 }

}

const rowStyles = {
  cardStyle: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    height: 20,
    width: 67
  },
  opacityStyle:{
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
}


export default connect(null, { closeModal, openModal } )(ProductRow);
