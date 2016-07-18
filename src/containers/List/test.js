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
import { fetchPosts, types } from './actions';

describe('List actions', () => {
  it('Should create an action to get all items', (done) => {
    expect(Promise.resolve(fetchPosts()))
      .to.eventually.have.property('type')
      .to.equal(types.FETCH_LIST).notify(done);
  });

  // it('Should create an action to get a single item', (done) => {
  //   expect(Promise.resolve(fetchPost(1))).
  //   to.eventually.have.property('type').to.equal(types.FETCH_ITEM).notify(done);
  // });
});

// Reducer test
import { reducer } from './reducers';

describe('List reducer', () => {
  it('Should return the initial state (Chai.expect) ', () => {
    const initialstate = reducer(undefined, {});
    expect(initialstate).to.be.an('object').to.have.property('all').that.is.an('array').to.eql([]);
  });

  it('Should mutate the state', (done) => {
    expect(
       reducer([], {
         type: types.FETCH_LIST,
         payload: {
           data: [
             {
               userId: 1,
               id: 1,
               title: 'Titulo 1',
               body: 'Contenido 1',
             },
             {
               userId: 1,
               id: 2,
               title: 'Titulo 2',
               body: 'Contenido 2',
             },
           ],
         },
       })
     ).to.eql({
       all: [
         {
           userId: 1,
           id: 1,
           title: 'Titulo 1',
           body: 'Contenido 1',
         },
         {
           userId: 1,
           id: 2,
           title: 'Titulo 2',
           body: 'Contenido 2',
         },
       ],
     });
    done();
  });
});
