import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../profile.png')}
        style={{height:24 , width:24}}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}
