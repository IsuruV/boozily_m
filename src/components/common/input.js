import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, onChangeText, value, placeHolder, secureTextEntry}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;

  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{ label }</Text>
      <TextInput
      placeholder={placeHolder}
      autoCorrect={false}
      style={inputStyle}
      onChangeText = { onChangeText }
      value = { value }
      secureTextEntry  = {secureTextEntry}
      />
    </View>
  )
};

const styles = {
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 28,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}


export { Input };
