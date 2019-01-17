import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../../src/pages/404';

describe('Tests for 404 page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
