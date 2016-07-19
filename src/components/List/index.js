import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView } from 'react-native';
import ListRow from '../ListRow';

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


export default class List extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  renderRow(rowData) {
    return (
      <ListRow rowData={rowData} navigator={this.props.navigator} />
    );
  }

  render() {
    if (!this.props.posts || this.props.posts.length === 0) {
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
  navigator: React.PropTypes.object,
  posts: React.PropTypes.array,
};
