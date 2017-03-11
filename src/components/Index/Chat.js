import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Chat extends Component {
    constructor(props){
      super(props)
    }

    render() {
        return (
                <View>
                  <Text>
                    Chat
                  </Text>
                  {/* <Button
                    onPress={this.props.toPeopleListScene}
                    title="Next"
                    color="#841584"
                  /> */}
                </View>
    )}
}
