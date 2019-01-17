import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from '../../src/components/Dropdown';

describe('Tests for Dropdown', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Dropdown
        categories={[{ href: '/a', title: 'a' }, { href: '/b', title: 'b' }]}
        color={{ hex: '#000' }}
        background={{ hex: '#fff' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
