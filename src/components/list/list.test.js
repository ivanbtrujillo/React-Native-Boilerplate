/* global define, it, describe, expect */
import React, { View, Text, Image } from 'react-native';
import { shallow } from 'enzyme';
import List, { styles } from './list';

describe('<List />', () => {
  const wrapper = shallow(
    <List />
  );

  // Component
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

  it('Text should be equal to React Native Redux Boilerplate', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        React Native Redux Boilerplate List!
      </Text>
    )).to.equal(true);
  });
});
