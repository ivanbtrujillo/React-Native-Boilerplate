import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './src/components/app/app';
import { Provider } from 'react-redux';

// Redux utilities
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// App main container
import reducers from './src/reducers';

// Create store
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(reducers);

class ReactNativeBoilerplate extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReactNativeBoilerplate);
