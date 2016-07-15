import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';
import Button from 'react-native-button';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>
          Welcome to ReactNativeBoilerplate
        </Text>
        <Button
          onPress={() =>
            this.props.navigator.push({
              name: 'List',
              sceneConfig: Navigator.SceneConfigs.VerticalDownSwipeJump,
            })}
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

// Proptypes
Login.propTypes = {
  navigator: React.PropTypes.object,
  route: React.PropTypes.object,
};
