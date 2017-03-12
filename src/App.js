import React, { Component } from 'react';
import IndexScene from './IndexScene'
import PeopleListScene from './PeopleListScene'
import {
  AppRegistry,
  Navigator
} from 'react-native';

export default class App extends Component {
  constructor() {
     super();
     this.renderScene = this.renderScene.bind(this);
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
        return <PeopleListScene navigator={navigator} toIndexScene={() => this.toIndexScene(navigator)} />
      default:
        return <IndexScene navigator={navigator} toPeopleListScene={() => this.toPeopleListScene(navigator)} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ scene: 'IndexScene'}}
        renderScene={this.renderScene}
       />
    );
  }
}
