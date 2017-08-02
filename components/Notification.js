import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';


export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../notification.png')}
        style={{height:23,width:23}}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}
