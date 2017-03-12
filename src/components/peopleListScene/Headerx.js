import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, Title, Left, Body, Button } from 'native-base';

export default class Headerx extends Component {
  render() {
      return (
        <Header>
            <Left>
                <Button transparent onPress={this.props.toIndexScene} title="Next">
                    <Icon name='navigate-before' size={30} color="#ffffff"/>
                </Button>
            </Left>
            <Body>
                <Title>Find Girls Nearby</Title>
            </Body>
        </Header>
      )
  }
}
