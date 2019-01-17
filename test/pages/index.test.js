import React from 'react';
import { shallow } from 'enzyme';

import IndexPage from '../../src/pages/index';

const mockData = {
  datoCmsFrontpage: {
    backgroundImage: 'img',
    color: { hex: '#fff' },
    menuBackground: { hex: '#fff' },
    menuColor: { hex: '#000' },
  },
};

describe('Tests for Index page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<IndexPage data={mockData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
