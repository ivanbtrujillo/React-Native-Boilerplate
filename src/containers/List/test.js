/* global define, it, describe, expect, assert */
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
import supertest from 'supertest';
import async from 'async';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=loquesea';

const api = supertest(ROOT_URL);

describe('List actions', () => {
  let id;
  it('Should create an action to fetch all posts', (done) => {
      api.get(`/posts${API_KEY}`)
        .expect(200)
        .end(function(err, response){
          // ID for single post request (next case)
          id = response.body[0].id;

          let promise = Promise.resolve(fetchPosts());
          expect(promise).to.eventually.have.property('type')
            .to.equal('FETCH_POSTS')
          expect(promise).to.eventually.have.property('payload')
            .to.be.an('object').notify(done);
        });
  });
  it('Should create an action to fetch a post', (done) => {
    let promise = Promise.resolve(fetchPost(id));
    expect(promise).to.eventually.have.property('type').to.equal('FETCH_POST')
    expect(promise).to.eventually.have.property('payload')
      .to.be.an('object').to.have.property('data')
      .to.be.an('object').to.have.property('title').notify(done);
  });
});

// Reducer test
import { reducer } from './reducers';

describe('List reducer', () => {

  it('Should return the initial state (Chai.expect) ', () => {
    const initialstate = reducer(undefined, {});
    expect(initialstate).to.be.an('object').to.have.property('all').that.is.an('array').to.eql([]);
  });
});
