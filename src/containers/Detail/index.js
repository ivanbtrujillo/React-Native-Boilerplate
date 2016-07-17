import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from './actions';

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

export class Detail extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.data.id);
  }

  render() {
    if (!this.props.post) {
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
          <Text style={styles.mainText}>
            A detail page
          </Text>
          <Button
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
            Delete
          </Button>
          <Text style={styles.mainText}>{this.props.post.title}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Text>{this.props.post.categories}</Text>
          <Text>{this.props.post.content}</Text>
        </View>
      </View>
    );
  }
}

Detail.propTypes = {
  fetchPost: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { post: state.post.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(Detail);
