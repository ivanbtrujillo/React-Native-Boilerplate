/* global define, it, describe, expect, assert */
import React, { View, Text, Image } from 'react-native';
import { shallow } from 'enzyme';
import List, { styles } from './index';

const propsWithoutData = {
  posts: [],
};

// Container test
describe('<List without posts />', () => {
  const wrapper = shallow(
    <List {...propsWithoutData} />
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


  it('Text should be equal to Loading ...', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        Loading ...
      </Text>
    )).to.equal(true);
  });
});

const propsWithData = {
  posts: [
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
};

// Container test
describe('<List with posts />', () => {
  const wrapper = shallow(
    <List {...propsWithData} />
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
