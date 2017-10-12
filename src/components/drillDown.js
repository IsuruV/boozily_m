import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { closeModal } from '../actions';

class DrillDown extends Component {

  render() {
    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalStatus}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>
            <TouchableHighlight onPress={() => { this.props.closeModal() }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>
    );
  }
}

const mapStateToProps = state =>{
  const { modalStatus } = state.modal;
  return { modalStatus };
}
export default connect(mapStateToProps, { closeModal, openModal } )(DrillDown);
