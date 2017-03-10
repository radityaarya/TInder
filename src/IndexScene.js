import React, { Component } from 'react';
import { Image, View, Button } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text, Right} from 'native-base';

import dataSource from './db/data'

export default class PeopleListScene extends Component {
    constructor(props){
      super(props)
    }

    render() {
        return (
            <Container>
                <View>
                  <Text>Tes aja bro</Text>
                  <Button
                    onPress={this.props.toPeopleListScene}
                    title="Next"
                    color="#841584"
                  />
                </View>
            </Container>
        );
    }
}
