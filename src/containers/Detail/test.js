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
  data: {},
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
  it('Should have three View component', () => {
    expect(wrapper.find(View)).to.have.length(3);
  });

  // Text
  it('Should have four Text component', () => {
    expect(wrapper.find(Text)).to.have.length(4);
  });


  it('Text should be equal to React Native Redux Boilerplate List!', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        A detail page
      </Text>
    )).to.equal(true);
  });
});

// Actions test
import { fetchPost, types } from './actions';

describe('Detail actions', () => {
  it('Should create an action to get an items', (done) => {
    expect(Promise.resolve(fetchPost(1)))
      .to.eventually.have.property('type')
      .to.equal(types.FETCH_ITEM).notify(done);
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
