import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../../src/components/Layout';

describe('Tests for Layout', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Layout
        location={{ pathname: '/test' }}
        color={{ hex: '#fff' }}
        menuColor={{ hex: '#fff' }}
        menuBackground={{ hex: '#000' }}
      >
        <span>childA</span>
        <span>childB</span>
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('uses defaultProps values for colors if none is provided', () => {
    const wrapper = shallow(
      <Layout location={{ pathname: '/test' }}>
        <span>child</span>
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
