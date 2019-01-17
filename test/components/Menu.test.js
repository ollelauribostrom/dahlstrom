import React from 'react';
import { shallow } from 'enzyme';

import Menu from '../../src/components/Menu';

describe('Tests for Menu', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Menu
        location={{ pathname: '/test' }}
        color={{ hex: '#fff' }}
        menuColor={{ hex: '#fff' }}
        menuBackground={{ hex: '#000' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
