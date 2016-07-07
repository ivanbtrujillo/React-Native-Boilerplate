/* global define, it, describe, expect */
import React, { View, Text } from 'react-native';
import Button from 'react-native-button';
import { shallow } from 'enzyme';
import Login, { styles } from './index';

describe('<Login />', () => {
  const wrapper = shallow(
    <Login />
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

  // Button
  it('Should have one Button component', () => {
    expect(wrapper.find(Button)).to.have.length(1);
  });

  it('Text should be equal to Login screen', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        Welcome to ReactNativeBoilerplate
      </Text>
    )).to.equal(true);
  });
});
