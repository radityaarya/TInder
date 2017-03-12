import React, { Component } from 'react';
import { Container, Header } from 'native-base';

import Search from './Search';
import GirlRecommendations from './GirlRecommendations';
import Chat from './Chat';

const PeopleListScene = () => {
    return (
        <Container>
            <Header></Header>
            <Search />
            <GirlRecommendations />
            <Chat />
        </Container>
    );
}

export default PeopleListScene
