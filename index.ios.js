import React, { Component } from 'react';
import PeopleListScene from './src/Index'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Viewimport React, { Component } from 'react';
  import IndexScene from '.src/IndexScene'
  import PeopleListScene from './src/PeopleListScene'
  import {
    AppRegistry,
    Navigator
  } from 'react-native';

  export default class Tinder extends Component {
    constructor(){
      super()
    }

    toIndexScene(navigator){
      navigator.pop()
    }

    toPeopleListScene(navigator){
      navigator.push({
        scene: 'PeopleList'
      })
    }

    renderScene(route, navigator){
      switch (route.scene) {
        case 'PeopleList':
          return <PeopleListScene navigator={navigator} toPeopleListScene={() => this.toPeopleListScene(navigator)} />
        default:
          return <IndexScene navigator={navigator} toIndexScene={() => this.toIndexScene(navigator)} />
      }
    }
    render() {
      return (
        <Navigator
          initialRoute={{ scene: 'IndexScene'}}
         />
      );
    }
  }

  AppRegistry.registerComponent('Tinder', () => Tinder);

} from 'react-native';

export default class Tinder extends Component {
  constructor(){
    super()
  }

  toIndexScene(navigator){
    navigator.pop()
  }

  toPeopleListScene(navigator){
    navigator.push({
      scene: 'PeopleList'
    })
  }

  renderScene(route, navigator){
    switch (route.scene) {
      case 'PeopleList':
        return <PeopleListScene navigator={navigator} toPeopleListScene={() => this.toPeopleListScene(navigator)} />
      default:
        return <IndexScene navigator={navigator} toIndexScene={() => this.toIndexScene(navigator)} />
    }
  }
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Tinder', () => Tinder);
