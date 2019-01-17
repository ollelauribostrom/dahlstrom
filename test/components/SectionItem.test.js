import React from 'react';
import { shallow } from 'enzyme';

import SectionItem from '../../src/components/SectionItem';

describe('Tests for SectionItem', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SectionItem description="test" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly when href prop is provided', () => {
    const wrapper = shallow(
      <SectionItem description="test" href="google.com" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
