import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../../src/components/Sidebar';

const mockData = {
  allDatoCmsCategory: {
    edges: [
      {
        node: {
          name: 'Test',
          slug: '/test',
        },
      },
    ],
  },
};

describe('Tests for Sidebar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Sidebar
        data={mockData}
        color={{ hex: '#000' }}
        menuColor={{ hex: '#000' }}
        menuBackground={{ hex: '#fff' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('uses defaultProps values for colors if none is provided', () => {
    const wrapper = shallow(<Sidebar data={mockData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
