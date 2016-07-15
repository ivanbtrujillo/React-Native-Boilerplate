/* global define, it, describe, expect */
import React, { View, Text, Image } from 'react-native';
import { shallow } from 'enzyme';
import { List, styles } from './index';

const props = {
  fetchPosts: function () {},
};

// Container test
describe('<List />', () => {
  const wrapper = shallow(
    <List {...props} />
  );

  it('Should render', () => {
    expect(wrapper.length).to.equal(1);
  });

  // View
  it('Should have one View component', () => {
    expect(wrapper.find(View)).to.have.length(1);
  });

  // Text
  it('Should have one Text component', () => {
    expect(wrapper.find(Text)).to.have.length(1);
  });

  // Image
  it('Should have one Image component', () => {
    expect(wrapper.find(Image)).to.have.length(1);
  });

  it('Text should be equal to React Native Redux Boilerplate List!', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        React Native Redux Boilerplate List!
      </Text>
    )).to.equal(true);
  });
});


// Actions test
import { fetchPosts, fetchPost, types } from './actions';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=loquesea';

describe('List actions', () => {
  it('Should create an action to fetch all posts', () => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((request) => {
      const expectedAction = {
        type: types.FETCH_POSTS,
        payload: request,
      };
      expect(fetchPosts()).toEqual(expectedAction);
    });
  });
  it('Should create an action to fetch a post', () => {
    axios.get(`${ROOT_URL}/posts/3${API_KEY}`).then((request) => {
      const expectedAction = {
        type: types.FETCH_POST,
        payload: request,
      };
      expect(fetchPost(3)).toEqual(expectedAction);
    });
  });
});

// Reducer test
// import reducer from './reducers';
// describe('List reducer', () => {
//   it('Should return the initial state', () => {
//     expect(
//       reducer(undefined, {})
//     ).toEqual({ all: [] })
//   });

  // it('Should handle FETCH_POSTS', () => {
  //   expect(
  //     axios.get(`${ROOT_URL}/posts/3${API_KEY}`).then((request) => {
  //       reducer([], {
  //         type: types.FETCH_POST,
  //         payload: request,
  //       })
  //     })
  //   ).toEqual(
  //     [
  //       {
  //         payload: { ...state, all: action.payload.data },
  //       }
  //     ]
  //   )
  // })
});
