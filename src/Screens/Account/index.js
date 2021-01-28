import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
export default class Account extends Component {
  render() {
    return (
      <View>
        <Text>this is Account screen</Text>
      </View>
    );
  }
}
Account.navigationOptions = {
  tabBarIcon: ({tintColor, focused}) => (
    <Icon
      name={focused ? 'ios-settings' : 'md-settings'}
      color={tintColor}
      size={25}
    />
  ),
};
