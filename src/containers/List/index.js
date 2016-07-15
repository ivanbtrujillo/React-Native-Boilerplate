import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView,
  TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from './actions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
    backgroundColor: 'white',
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
  row: {
    height: 60,
    padding: 20,
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
    width: Dimensions.get('window').width,
  },
});


export class List extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  handleOnPress(data) {
    this.props.navigator.push({ name: 'Detail', data: data });
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        underlayColor="rgba(0,0,0,0)"
        onPress={() => this.handleOnPress(rowData)} style={styles.row}
      >
        <Text style={styles.rowText}>{rowData.title}</Text>
      </TouchableHighlight>
    );
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
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.posts)}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    );
  }
}

List.propTypes = {
  fetchPosts: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
  posts: React.PropTypes.object,
};

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts, fetchPost })(List);
