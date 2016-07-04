import React, { Component } from 'react';

// Router React-native Redux / Flux
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

// Components
import List from '../list/list';
import Login from '../login/login';
import Detail from '../detail/detail';

// Connect Router with redux
const RouterWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar />
        </Scene>
        <Scene key="home" >
          <Scene
            key="list"
            component={List}
            title="List"
            rightTitle="Detail"
            onRight={() => Actions.detail()}
          />
          <Scene key="detail" component={Detail} title="Detail" />
        </Scene>
      </RouterWithRedux>
    );
  }
}
