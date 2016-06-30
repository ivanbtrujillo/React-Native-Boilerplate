/* global define, it, describe, expect */
import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import App, { styles } from './App';

describe('<App />', () => {
  const wrapper = shallow(
    <App />
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
  it('Should have one text component', () => {
    expect(wrapper.find(Text)).to.have.length(1);
  });

  it('Text should be equal to React Native Redux Boilerplate', () => {
    expect(wrapper.contains(
      <Text style={styles.mainText}>
        React Native Redux Boilerplate!
      </Text>
    )).to.equal(true);
  });
});
