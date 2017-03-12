import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { DeckSwiper, Card, CardItem, Text, Button} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/MaterialIcons';

import dataSource from '../../db/data';

export default class Sweeper extends Component {

  render() {
      return (
        <DeckSwiper
          dataSource={dataSource}
          renderItem={item =>
              <Card style={{ elevation: 4, padding: 10 }}>
                  <CardItem cardBody>
                      <Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 250 }} source={item.image} />
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

                  <CardItem style={{flex: 1, justifyContent: 'space-around'}}>
                    <Button transparent>
                      <Icon name="close" style={{color:'#737373', fontSize: 60}}  />
                    </Button>
                    <Button transparent>
                      <Icon name="favorite-border" style={{color:'#737373', fontSize: 60}} />
                    </Button>
                  </CardItem>
              </Card>
          }
        />
      )
  }
}
