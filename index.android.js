import React, { Component } from 'react';
import App from './src/Index'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Tinder extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Tinder', () => Tinder);
