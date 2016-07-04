import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
  logo: {
    width: 64,
    height: 64,
  },
});

export default class Home extends Component {

  componentWillMount() {
    // Read the state
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>
          React Native Redux Boilerplate List!
        </Text>
        <Image
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          style={styles.logo}
        />
      </View>
    );
  }
}
