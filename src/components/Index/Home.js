import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends Component {
    constructor(props){
      super(props)
    }

    render() {
        return (
                <View>
                  <Text>
                    Home
                  </Text>
                  {/* <Button
                    onPress={this.props.toPeopleListScene}
                    title="Next"
                    color="#841584"
                  /> */}
                </View>
    )}
}
