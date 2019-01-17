import React from 'react';
import { shallow } from 'enzyme';

import ContactPage from '../../src/pages/contact';

describe('Tests for Contact page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContactPage location={{ pathname: '/test' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
