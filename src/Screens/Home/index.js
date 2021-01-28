import React, {Component} from 'react';
import {Image} from 'react-native';

import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../Image/react-native1.png'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../../Image/react-icon2.png'),
  },
];
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card style={{elevation: 3}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{height: 300, flex: 1}} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{color: '#ED4A6A'}} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
Home.navigationOptions = {
  tabBarIcon: ({tintColor, focused}) => (
    <Icon
      name={focused ? 'ios-settings' : 'md-settings'}
      color={tintColor}
      size={25}
    />
  ),
};
