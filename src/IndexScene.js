import React, { Component } from 'react';
import { TouchableHighlight, ScrollView,  Image, View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, InputGroup, Input, Button, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';


import dataSource from './db/data'

export default class PeopleListScene extends Component {
    constructor(props){
      super(props)
    }

    render() {
        return (
            <Container>
                  <Header>
                  </Header>
                   <InputGroup>
                       <Icon name="search" size={20}/>
                       <Input placeholder="Search" />
                   </InputGroup>
                   <View>
                     <Text style={{marginLeft : 15, marginTop : 15, fontSize: 14}}>
                       Girl recommendations ({dataSource.length})
                     </Text>
                     <ScrollView horizontal={true}>
                       {
                         dataSource.map( (data, index) => {
                         return(
                           <Thumbnail key={index} source={data.image} style={{ marginTop : 15, marginLeft: 10, marginRight: 10}}/>
                         )
                       })
                      }
                     <TouchableHighlight onPress={this.props.toPeopleListScene}>
                       <Icon name='navigate-next' size={35} color="#7d7d7d" style={{marginTop: 22}}/>
                     </TouchableHighlight>
                     </ScrollView>
                   </View>
                   <View>
                         <Text style={{marginLeft : 15, marginTop : 15, fontSize: 14}}>
                           Chat ({dataSource.length})
                         </Text>
                         <ScrollView>
                         {
                            dataSource.map( (data, index) => {
                               return(
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
                                )
                            })
                          }
                         </ScrollView>
                       <Col size={80}>
                         <Text>tes</Text>
                       </Col>
                   </View>
            </Container>
        );
    }
}
