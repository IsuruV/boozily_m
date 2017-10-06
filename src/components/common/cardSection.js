import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = styles;

  return(
    <View style = { props.styles ? props.styles : containerStyle }>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  }
}

export { CardSection };
