import React from 'react';
import { shallow } from 'enzyme';

import ProjectTemplate from '../../src/templates/project';

describe('Tests for Project template', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ProjectTemplate
        location={{ pathname: '/test' }}
        pageContext={{ seo: { title: 'test', keywords: ['a', 'b'] } }}
        data={{
          datoCmsWork: {
            title: 'Test project',
            description: 'test description',
            video1: 'videosrc',
            images: [
              {
                fluid: {
                  aspectRatio: 1.4678899082568808,
                  sizes: '(max-width: 1800px) 100vw, 1800px',
                  src: 'someurl',
                  srcSet: 'someurl',
                },
              },
              {
                fluid: {
                  aspectRatio: 1.4678899082568808,
                  sizes: '(max-width: 1800px) 100vw, 1800px',
                  src: 'someurl',
                  srcSet: 'someurl',
                },
              },
            ],
          },
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
