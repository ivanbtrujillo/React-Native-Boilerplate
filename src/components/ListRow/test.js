/* global define, it, describe, expect */
import React, { Text, TouchableHighlight } from 'react-native';
import { shallow } from 'enzyme';
import ListRow from './index';

const props = {
  rowData: {
    id: 1,
    title: 'Titulo 1',
    body: 'Contenido 1',
  },
  navigator: {},
};

describe('<ListRow />', () => {
  const wrapper = shallow(
    <ListRow {...props} />
  );

  it('Should render', () => {
    expect(wrapper.length).to.equal(1);
  });

  it('Should have one TouchableHighlight component', () => {
    expect(wrapper.find(TouchableHighlight)).to.have.length(1);
  });

  it('Should have one Text component', () => {
    expect(wrapper.find(Text)).to.have.length(1);
  });

  it('Title should be rendered on Text component', () => {
    expect(wrapper.contains(
      <Text>
        Titulo 1
      </Text>
    )).to.equal(true);
  });
});
