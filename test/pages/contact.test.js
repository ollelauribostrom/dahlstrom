import React from 'react';
import { shallow } from 'enzyme';

import ContactPage from '../../src/pages/contact';

const mockData = {
  datoCmsSetting: {
    headingColor: {
      hex: '#000',
    },
    contactImage: {
      url: 'some-url',
      fluid: {
        aspectRatio: 1.4678899082568808,
        sizes: '(max-width: 1800px) 100vw, 1800px',
        src: 'someurl',
        srcSet: 'someurl',
      },
    },
  },
};

describe('Tests for Contact page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ContactPage location={{ pathname: '/test' }} data={mockData} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
