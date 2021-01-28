import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
export default class Gold extends Component {
  render() {
    return (
      <View>
        <Text>this is Gold screen</Text>
      </View>
    );
  }
}
Gold.navigationOptions = {
  tabBarIcon: ({tintColor, focused}) => (
    <Icon
      name={focused ? 'ios-settings' : 'md-settings'}
      color={tintColor}
      size={25}
    />
  ),
};
