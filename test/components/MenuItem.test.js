import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from '../../src/components/MenuItem';

describe('Tests for MenuItem', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <MenuItem color={{ hex: '#fff' }}>
        <span>child</span>
      </MenuItem>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly when active', () => {
    const wrapper = shallow(
      <MenuItem isActive={true}>
        <span>child</span>
      </MenuItem>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
