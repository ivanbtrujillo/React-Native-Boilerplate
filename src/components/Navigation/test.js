/* global define, it, describe, expect */
import React from 'react-native';
import { shallow } from 'enzyme';
import Navigation, { NavigationBarRouteMapper } from './index';

const leftButton = NavigationBarRouteMapper.LeftButton;
const rightButton = NavigationBarRouteMapper.RightButton;
const title = NavigationBarRouteMapper.Title;

describe('<Navigation/>', () => {
  const wrapper = shallow(
    <Navigation />
  );

  it('Should render', () => {
    expect(wrapper.length).to.equal(1);
  });

  it('NavigationBar should have LeftButton, Title and Rightbutton', () => {
    expect(NavigationBarRouteMapper).to.be.an('object')
      .to.include.keys(['LeftButton', 'Title', 'RightButton']);
  });

  it('Should not display a right button', () => {
    expect(rightButton()).to.be.null();
  });
});

describe('NavigationBarRouteMapper', () => {
  describe('NavigationBar Login', () => {
    const route = {
      name: 'Login',
      display: false,
    };

    it('Should not display a left button', () => {
      expect(leftButton(route)).to.be.null();
    });

    it('Should not display a title', () => {
      expect(title(route)).to.be.null();
    });
  });

  describe('NavigationBar Main View', () => {
    const route = {
      name: 'List',
      display: true,
    };

    it('Should not display a left button', () => {
      expect(leftButton(route)).to.be.null();
    });

    it('Should display a title', () => {
      expect(title(route)).to.have.property('type')
        .to.have.property('displayName').to.be.equal('Text');
      expect(title(route)).to.have.property('props')
        .to.have.property('children').to.be.equal('List');
    });
  });

  describe('NavigationBar Detail View', () => {
    const route = {
      name: 'Detail',
      display: true,
    };

    it('Should display a left button', () => {
      const leftButtonInstance = leftButton(route);
      expect(leftButtonInstance.type.displayName).to.be.equal('TouchableHighlight');
      expect(leftButtonInstance.props.children.type.displayName).to.be.equal('Text');
    });

    it('Should display a title', () => {
      const titleInstance = title(route);
      expect(titleInstance.type.displayName).to.be.equal('Text');
      expect(titleInstance.props.children).to.be.equal('Detail');
    });
  });
});
