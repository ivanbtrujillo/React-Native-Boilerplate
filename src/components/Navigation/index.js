import React, { Component } from 'react';
import { Navigator, TouchableHighlight, Text, StyleSheet } from 'react-native';
import NavigationBar from '../NavigationBar';
// Components
import Login from '../Login';

// Containers
import List from '../../containers/List';
import Detail from '../../containers/Detail';

// Navigation bar configuration
const NavigationBarRouteMapper = {
  LeftButton: function (route, navigator, index) {
    if (route.name === 'Login') {
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
  RightButton: function (route, navigator, index) {
    return null;
  },
  Title: function (route, navigator, index) {
		//Title hidden for Login view
    if(route.name == 'Login'){
      return null;
    }
    return(
      <Text style={{marginTop: 10, color:'#007AFF' }}>
        {route.name}
      </Text>
    )
  },
};


export default class Navigation extends Component {

	//Mostramos una vista u otra en funcion del nombre de la ruta
  renderScene (route, navigator) {
    switch (route.name) {
			case 'Login':
      	return (
           <Login navigator={navigator} route={route} />
        );
       	case 'List':
         	return (
       	 		<List navigator={navigator} route={route}/>
         	);
      	case 'Detail':
      		return (
        		<Detail navigator={navigator} route={route} data={route.data} />
        );
     }
  }

	// Where components are displayed
  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Login',
          display: false
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
        /> }
      />
    );
  }
}

const styles = StyleSheet.create({
  navContainer: {
    flex:1,
  },
  navBar:{
    borderBottomWidth:1,
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
     marginVertical: 9  // iOS
  // marginVertical: 16 // Android
   },
   navBarLeftButton: {
     paddingLeft: 10
   },
   navBarRightButton: {
     paddingRight: 10
   },
   navBarButtonText: {
     color: '#EEE',
     fontSize: 16,
     marginVertical: 10 // iOS
  // marginVertical: 16 // Android
   }
});
