import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from '../../src/components/MenuItem';

describe('Tests for MenuItem', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MenuItem title="Test" url="/test" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly when active', () => {
    const wrapper = shallow(<MenuItem title="Test" url="/test" isActive />);
    expect(wrapper).toMatchSnapshot();
  });
});
