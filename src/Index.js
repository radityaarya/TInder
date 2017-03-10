import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text, Right, Button} from 'native-base';

const cards = [
    {
        interest: 'Acting',
        distance: '523 m',
        name: 'Chelsea Islan',
        age: '21',
        image: require('../img/ProfilePicture/pp1.jpg'),
        bio: 'tbh I just want to get some free food here'
    },
    {
        interest: 'Modeling',
        distance: '831 m',
        name: 'Raline Shah',
        age: '26',
        image: require('../img/ProfilePicture/pp2.jpg'),
        bio: 'damn boy u must be my GPA because i know i could do better. Im just too lazy to actually try'
    },
    {
        interest: 'Singing',
        distance: '231 m',
        name: 'Raisa Andriani',
        age: '27',
        image: require('../img/ProfilePicture/pp3.jpg'),
        bio: 'Your parents will love me, but your neighbors wont'
    },
];

export default class App extends Component {

    render() {
        return (
            <Container>
                <View>
                  <Grid>
                    <Col>
                      <DeckSwiper
                          dataSource={cards}
                          renderItem={item =>
                              <Card style={{ elevation: 4 }}>
                                  <CardItem cardBody>
                                      <Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 300 }} source={item.image} />
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
                                  {/* <CardItem>
                                      <Button>
                                        <Icon name="heart" />
                                      </Button>
                                      <Button>
                                        <Icon name="close" />
                                      </Button>
                                  </CardItem> */}
                              </Card>
                          }

                      />
                  </Col>
                  </Grid>
                </View>
            </Container>
        );
    }
}
