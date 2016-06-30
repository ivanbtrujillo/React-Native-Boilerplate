import React, { Component } from 'react';

// Redux utilities
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

// import reducers from '../reducers';

//App main container
import App from './components/app/app';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class Index extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
    );
  }
}
