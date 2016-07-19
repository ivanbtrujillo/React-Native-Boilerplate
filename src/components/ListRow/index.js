// Import the needed components
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    height: 60,
    padding: 20,
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
    width: Dimensions.get('window').width,
  },
});

class ListRow extends Component {

  handleOnPress(data) {
    this.props.navigator.push({ name: 'Detail', data: data });
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor="rgba(0,0,0,0)"
        onPress={() => this.handleOnPress(this.props.rowData)} style={styles.row}
      >
        <Text>{this.props.rowData.title}</Text>
      </TouchableHighlight>
    );
  }
}

ListRow.propTypes = {
  rowData: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};

// Export the Component
module.exports = ListRow;
