import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import NotificationsScreen from './components/Notification'
import HomeScreen from './components/Home'
import ProfileScreen from './components/Profile'

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const person13 = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    style: {
    	backgroundColor: '#394648',
  	},
  	showIcon: true,
  	showLabel: false,
  },
  tabBarPosition: 'bottom',
  
});


AppRegistry.registerComponent('person13', () => person13);


//adb shell input keyevent 82


//concept of circles , personal status