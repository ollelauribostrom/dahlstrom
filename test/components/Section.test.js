import React from 'react';
import { shallow } from 'enzyme';

import Section from '../../src/components/Section';

describe('Tests for Section', () => {
  it('renders correctly for a single child', () => {
    const wrapper = shallow(
      <Section title="test">
        <span>child</span>
      </Section>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly for a multiple children', () => {
    const wrapper = shallow(
      <Section title="test">
        <span>child</span>
        <span>child</span>
      </Section>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
