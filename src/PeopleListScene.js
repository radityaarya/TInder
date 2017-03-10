import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Header, Content, Title, Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text, Right, Button} from 'native-base';

import dataSource from './db/data'

export default class PeopleListScene extends Component {

    render() {
        return (
            <Container>
                <View>
                      <Header style={{backgroundColor: "#52d7fa"}}>
                          <Left>
                              <Button transparent onPress={this.props.toIndexScene}
                              title="Next">
                                  <Icon name='arrow-back' />
                              </Button>
                          </Left>
                          <Body>
                              <Title>Find Girls Nearby</Title>
                          </Body>
                      </Header>
                      <DeckSwiper
                        dataSource={dataSource}
                        renderItem={item =>
                          <Card style={{ elevation: 4, padding: 10 }}>
                            <CardItem cardBody>
                              <Image style={{ resizeMode: 'cover', width: 100, flex: 1, height: 250 }} source={item.image} />
                          </CardItem>
                          <CardItem>
                            <Grid>
                              <Row>
                                <Text style={{color: '#363636', fontSize: 30}}>
                                  <Text style={{fontWeight: 'bold', color: '#363636', fontSize: 30}}>
                                    {item.name}
                                  </Text>
                                  , {item.age}
                                </Text>
                              </Row>
                              <Row>
                                <Text style={{color: '#616161', fontSize: 15}}>
                                  {item.distance} away  |
                                </Text>
                                <Text style={{color: '#616161',}}>  Interest in <Text style={{fontWeight: 'bold'}}>{item.interest}</Text></Text>
                            </Row>
                          </Grid>
                        </CardItem>
                        <CardItem>
                          <Grid>
                            <Row>
                              <Text>
                                About {item.name} :
                              </Text>
                            </Row>
                            <Row>
                              <Text style={{color: '#616161',}}>
                                {item.bio}
                              </Text>
                            </Row>
                          </Grid>
                        </CardItem>
                        <CardItem>
                          <Button transparent>
                            <Icon name="heart" style={{color:'#737373', fontSize: 60}} />
                        </Button>
                        <Button transparent>
                          <Icon name="close" style={{color:'#737373', fontSize: 60}}  />
                      </Button>
                    </CardItem>
                  </Card>
                }
              />
                </View>
            </Container>
        );
    }
}
