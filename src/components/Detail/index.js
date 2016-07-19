import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class Detail extends Component {

  render() {
    if (!this.props.post || this.props.post.id !== this.props.data.id) {
      return (
        <View style={styles.container}>
          <Text style={styles.mainText}>
            Loading ...
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={styles.mainText}>{this.props.post.title}</Text>
          <Text>{this.props.post.body}</Text>
        </View>
      </View>
    );
  }
}

Detail.propTypes = {
  data: React.PropTypes.object.isRequired,
  post: React.PropTypes.object,
};
