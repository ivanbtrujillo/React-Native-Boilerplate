import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from './actions';
import ListRow from '../../components/ListRow';

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
});


export class List extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderRow(rowData) {
    return (
      <ListRow rowData={rowData} navigator={this.props.navigator} />
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
          enableEmptySections
        />
      </View>
    );
  }
}

List.propTypes = {
  fetchPosts: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
  posts: React.PropTypes.array,
};

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts, fetchPost })(List);
