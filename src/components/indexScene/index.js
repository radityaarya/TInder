import React, { Component } from 'react';
import { Container, Header } from 'native-base';

import Search from './Search';
import GirlRecommendations from './GirlRecommendations';
import Chat from './Chat';

export default class PeopleListScene extends Component {
  render(){
    return (
        <Container>
            <Header></Header>
            <Search />
            <GirlRecommendations toPeopleListScene={this.props.toPeopleListScene} />
            <Chat />
        </Container>
    );
  }
}
