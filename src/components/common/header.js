import React, { Component } from 'react'
import { Text, View, Styles} from 'react-native';


class Header extends Component{
    render(){
    const { textStyle, viewStyle } = styles;
      return(
        <View style = { viewStyle }>
          <Text style={ textStyle }> {this.props.title} </Text>
        </View>
      )
    }
}

const styles = {
  textStyle: {
    fontSize: 25,
  },
  viewStyle: {
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1
  }
}
export { Header };
