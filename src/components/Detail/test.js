/* global define, it, describe, expect, assert */
import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import Detail, { styles } from './index';

const propsWithoutData = {
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


  it('Text should be equal to Loading ...', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        Loading ...
      </Text>
    )).to.equal(true);
  });
});

const propsWithData = {
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
