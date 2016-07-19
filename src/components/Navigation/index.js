import React, { Component } from 'react';
import { Navigator, TouchableHighlight, Text, StyleSheet } from 'react-native';
// Components
import Login from '../Login';

// Containers
import ListContainer from '../../containers/ListContainer';
import DetailContainer from '../../containers/DetailContainer';

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
  },
  navBar: {
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 9,  // iOS
  // marginVertical: 16 // Android
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#EEE',
    fontSize: 16,
    marginVertical: 10, // iOS
  // marginVertical: 16 // Android
  },
  title: {
    marginTop: 10,
    color: '#007AFF',
  },
});

// Navigation bar configuration
export const NavigationBarRouteMapper = {
  LeftButton: function (route, navigator, index) {
    if (route.name === 'Login' || route.name === 'List') {
      return null;
    }
    return (
      <TouchableHighlight
        underlayColor={'rgba(0,0,0,0)'}
        onPress={() => {
          if (index > 0) {
            navigator.pop();
          }
        }}
      >
        <Text style={{ marginTop: 10, marginLeft: 20, color: '#007AFF' }}>Back</Text>
      </TouchableHighlight>
    );
  },
  RightButton: function () {
    return null;
  },
  Title: function (route) {
		// Title hidden for Login view
    if (route.name === 'Login') {
      return null;
    }
    return (
      <Text style={styles.title}>
        {route.name}
      </Text>
    );
  },
};


export default class Navigation extends Component {

	// Mostramos una vista u otra en funcion del nombre de la ruta
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Login':
        return (
          <Login navigator={navigator} route={route} />
        );
      case 'List':
        return (
          <ListContainer navigator={navigator} route={route} />
        );
      case 'Detail':
        return (
          <DetailContainer navigator={navigator} route={route} data={route.data} />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Login',
          display: false,
        }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        navigationBar={
          <NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />}
      />
    );
  }
}

class NavigationBar extends Navigator.NavigationBar {
  render() {
    const routes = this.props.navState.routeStack;
    const route = routes[routes.length - 1];
    if (route.display === false) {
      return null;
    }
    return super.render();
  }
}
