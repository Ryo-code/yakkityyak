import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends Component {
  state = {
    messages: []
  };

  componentWillMount(){

  }

  render(){
    return (
      <GiftedChat
        messages={this.state.messages} //
        onSend={(messages) => {
          //伝言をbackendに送る
        }} 
        user={{
          _id: 1,
        }}
      />
    )
  }
}

Chat.defaultProps = {
  name: "John",
}

Chat.propTypes = {
  name: React.PropTypes.string,
};