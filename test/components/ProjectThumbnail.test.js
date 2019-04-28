import React from 'react';
import { shallow } from 'enzyme';

import ProjectThumbnail from '../../src/components/ProjectThumbnail';

describe('Tests for ProjectThumbnail', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ProjectThumbnail
        hoverColor={{ hex: '#000' }}
        project={{
          slug: '/test',
          title: 'Test',
          featuredImage: {
            fluid: {
              aspectRatio: 1.4678899082568808,
              sizes: '(max-width: 1800px) 100vw, 1800px',
              src: 'someurl',
              srcSet: 'someurl',
            },
          },
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('shows the project title when hovering the thumbnail', () => {
    const wrapper = shallow(
      <ProjectThumbnail
        hoverColor={{ hex: '#000' }}
        project={{
          slug: '/test',
          title: 'Test',
          featuredImage: {
            fluid: {
              aspectRatio: 1.4678899082568808,
              sizes: '(max-width: 1800px) 100vw, 1800px',
              src: 'someurl',
              srcSet: 'someurl',
            },
          },
        }}
      />
    );
    expect(wrapper.state().showTitle).toEqual(false);
    wrapper.simulate('mouseover');
    expect(wrapper.state().showTitle).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});
