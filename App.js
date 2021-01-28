/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import AppNavigator from './src/Navigation/AppNavigator';
Icon.loadFont();
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingHorizontal: 18,
    paddingTop: 5,
  },
});
