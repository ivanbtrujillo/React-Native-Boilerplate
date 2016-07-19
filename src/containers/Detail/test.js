/* global define, it, describe, expect, assert */
import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import { Detail, styles } from './index';

const propsWithoutData = {
  fetchPost: function () {},
  data: {},
};

// Container test
describe('<Detail without post />', () => {
  const wrapper = shallow(
    <Detail {...propsWithoutData} />
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


  it('Text should be equal to React Native Redux Boilerplate List!', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        Loading ...
      </Text>
    )).to.equal(true);
  });
});

const propsWithData = {
  fetchPost: function () {},
  data: {
    id: 1,
  },
  post: {
    userId: 1,
    id: 1,
    title: 'Titulo 1',
    body: 'Contenido 1',
  },
};

// Container test
describe('<Detail with post />', () => {
  const wrapper = shallow(
    <Detail {...propsWithData} />
  );

  it('Should render', () => {
    expect(wrapper.length).to.equal(1);
  });

  // View
  it('Should have two View component', () => {
    expect(wrapper.find(View)).to.have.length(2);
  });

  // Text
  it('Should have two Text component', () => {
    expect(wrapper.find(Text)).to.have.length(2);
  });

  it('Post title should be rendered inside a Text', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        Titulo 1
      </Text>
    )).to.equal(true);
  });
  it('Post body should be rendered inside a Text', () => {
    expect(wrapper.contains(
      <Text>
        Contenido 1
      </Text>
    )).to.equal(true);
  });
});

// Actions test
import { fetchPost, types } from './actions';

describe('Detail actions', () => {
  it('Should create an action to get an items', (done) => {
    const apiPromise = fetchPost(1);
    expect(apiPromise).to.have.property('type').to.equal(types.FETCH_ITEM);
    expect(Promise.resolve(apiPromise.payload)).to.eventually.have.property('data')
    .that.is.an('object').to.include.keys(['id', 'title', 'body']).notify(done);
  });
});

// Reducer test
import { reducer } from './reducers';

describe('Detail reducer', () => {
  it('Should return the initial state (Chai.expect) ', () => {
    const initialstate = reducer(undefined, {});
    expect(initialstate).to.be.an('object')
     .to.have.property('post').to.eql(null);
  });

  it('Should mutate the state', (done) => {
    expect(
       reducer([], {
         type: types.FETCH_ITEM,
         payload: {
           data: {
             userId: 1,
             id: 1,
             title: 'Titulo 1',
             body: 'Contenido 1',
           },
         },
       })
     ).to.eql({
       post: {
         userId: 1,
         id: 1,
         title: 'Titulo 1',
         body: 'Contenido 1',
       },
     });
    done();
  });
});
