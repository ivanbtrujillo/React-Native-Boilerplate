import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

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

function handleOnPress() {
  // Update the state
  Actions.home();
}

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>
          Welcome to ReactNativeBoilerplate
        </Text>
        <Button
          onPress={handleOnPress}
          containerStyle={{
            padding: 10,
            height: 45,
            width: 120,
            overflow: 'hidden',
            borderRadius: 4,
            backgroundColor: 'blue',
          }}
          style={{ fontSize: 20, color: 'white' }}
        >
            Login
        </Button>
      </View>
    );
  }
}
