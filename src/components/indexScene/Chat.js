import React, { Component } from 'react';
import { TouchableHighlight, ScrollView, Text, View, ListView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import dataSource from '../../db/data'

export default class GirlRecommendations extends Component {
    constructor(props){
      super(props)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
          data: ds.cloneWithRows([...dataSource]),
      }
    }

    componentWillReceiveProps(nextProps){
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
          data: ds.cloneWithRows([...dataSource]),
      })
    }

    render() {
        return (
              <View>
                  <Text style={{marginLeft : 15, marginTop : 15, fontSize: 14}}>
                     Chat ({dataSource.length})
                  </Text>

                  <ListView
                      dataSource={this.state.data}
                      renderRow={(data, index) =>
                          <Grid key={index} >

                            <Col size={23}>
                              <Thumbnail source={data.image} style={{ marginTop : 15, marginLeft: 10, marginRight: 20}}/>
                            </Col>

                            <Col size={80}  style={{ marginTop : 20}}>
                                <Row size={27}>
                                    <Text style={{color: '#1b1a1a', fontWeight: 'bold'}}>{data.name}</Text>
                                </Row>
                                <Row size={70}>
                                    <Text>message preview here ..</Text>
                                </Row>
                            </Col>

                          </Grid>
                      }
                  />
             </View>
        )
    }
}
