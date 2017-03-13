import React, { Component } from 'react';
import { TouchableHighlight, ScrollView, Text, View } from 'react-native';
import { Thumbnail, Container } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import dataSource from '../../db/data'

export default class GirlRecommendations extends Component {

  render() {
      return (
        <Container style={{backgroundColor: '#ffffff'}}>
          <Text style={{marginLeft : 15, marginTop : 15, fontSize: 14}}>
            Girl recommendations ({dataSource.length})
          </Text>

          <ScrollView horizontal={true}>
              {
                dataSource.slice(0,7).map( (data, index) => {
                  return(
                    <Thumbnail key={index} source={data.image} style={{ marginTop : 15, marginLeft: 10, marginRight: 10}}/>
                  )
                })
              }
              <TouchableHighlight onPress={this.props.toPeopleListScene}>
                <Icon name='navigate-next' size={35} color="#7d7d7d" style={{marginTop: 22}}/>
              </TouchableHighlight>
          </ScrollView>

        </Container>
      )
  }
}
