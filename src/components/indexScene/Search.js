import React, { Component } from 'react';
import { InputGroup, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Search extends Component {

  render() {
      return (
          <InputGroup>
              <Icon name="search" size={20}/>
              <Input placeholder="Search" />
          </InputGroup>
      )
  }
}
