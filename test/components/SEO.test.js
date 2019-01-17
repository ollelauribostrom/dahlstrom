import React from 'react';
import { shallow } from 'enzyme';

import SEO from '../../src/components/SEO';

describe('Tests for SEO', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SEO title="Test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
