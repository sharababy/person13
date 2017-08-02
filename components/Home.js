import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,

} from 'react-native';

import StatusList from './StatusList'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Friends',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../list.png')}
        style={{width:20, height:20}}
      />
    ),
  };

  render() {
    return (
      
      	
      	<StatusList />
      
    );
  }
}
