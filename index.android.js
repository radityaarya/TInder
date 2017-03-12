import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import App from './src/App';
import store from './src/Store';

export default class Tinder extends Component {
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Tinder', () => Tinder);
