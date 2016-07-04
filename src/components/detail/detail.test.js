/* global define, it, describe, expect */
import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import Detail, { styles } from './detail';

describe('<Detail />', () => {
  const wrapper = shallow(
    <Detail />
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

  it('Text should be equal to A detail page', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        A detail page
      </Text>
    )).to.equal(true);
  });
});
