import React from 'react';
import { shallow } from 'enzyme';

import ImageBackground from '../../src/components/ImageBackground';

describe('Tests for ImageBackground', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ImageBackground
        src={{
          fluid: {
            aspectRatio: 1.4678899082568808,
            sizes: '(max-width: 1800px) 100vw, 1800px',
            src: 'someurl',
            srcSet: 'someurl',
          },
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
