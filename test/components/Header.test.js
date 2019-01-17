import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../src/components/Header';

describe('Tests for Header', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Header siteTitle="test" path="/test" color={{ hex: 'fff' }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('uses default value for color if none is provided', () => {
    const wrapper = shallow(<Header siteTitle="test" path="/test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
