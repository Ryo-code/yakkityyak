import React, { Component } from 'react';

import Home from './components/Home';
import Chat from './components/Chat';

import {
  Router, 
  Scene
} from 'react-native-router-flux';

import {
  Platform //ユーザーの使ってる機会を知るため
} from 'react-native';

export default class App extends Component {
  render(){
    return (
      <Router>
        <Scene key="root" style={{paddingTop: Platform.OS === 'ios' ? 65 : 55}}>
          <Scene key="home" component={Home} title="Home"/>
          <Scene key="chat" component={Chat} title="Chat"/>
        </Scene>
      </Router>
    )
  }
}