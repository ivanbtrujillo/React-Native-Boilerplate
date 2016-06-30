import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>
          React Native Redux Boilerplate!
        </Text>
      </View>
    );
  }
}
