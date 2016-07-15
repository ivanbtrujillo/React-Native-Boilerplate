// Import the needed components
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

// Import the custom Component
import Post from './post';

const styles = StyleSheet.create({
  post: {
    flex: 1,
    alignItems: 'center',
    marginTop: 64,
  },
});

class PostDetail extends Component {
  // Method for render the scene
  render() {
    return (
      <View style={styles.post}>
        <Post title={this.props.post.title} body={this.props.post.body} />
      </View>
    );
  }
}

PostDetail.propTypes = {
  post: React.PropTypes.object.isRequired,
};

// Export the Component
module.exports = PostDetail;
