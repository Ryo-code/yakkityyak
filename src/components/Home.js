'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
    state = {
      name: "",
    }

  render(){
    const { title, nameInput, buttonText } = styles;

    return (
      <View>
        <Text style={title}> 
          Enter your name:
        </Text>
        <TextInput
          style={nameInput}
          placeholder="ex. Ronald Dump"
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            alert(this.state.name)
          }}
        >
          <Text style={buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '600'
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    margin: 20,
    borderRadius: 7,
    padding: 5
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20
  }

})