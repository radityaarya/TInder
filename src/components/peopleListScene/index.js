import React, { Component } from 'react';
import { View } from 'react-native';

import Headerx from './Headerx';
import Sweeper from './Sweeper';
import dataSource from '../../db/data';

export default class PeopleListScene extends Component {

    render() {
        return (
            <View>
              <Headerx toIndexScene={this.props.toIndexScene} />
              <Sweeper />
            </View>
        );
    }
}
