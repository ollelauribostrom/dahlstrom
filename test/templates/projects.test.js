import React from 'react';
import { shallow } from 'enzyme';

import ProjectsTemplate from '../../src/templates/projects';

const mockData = {
  allDatoCmsWork: {
    edges: [
      {
        node: {
          title: 'Test project',
          slug: '/test',
          images: [
            {
              fluid: {
                aspectRatio: 1.4678899082568808,
                sizes: '(max-width: 1800px) 100vw, 1800px',
                src: 'someurl1',
                srcSet: 'someurl1',
              },
            },
            {
              fluid: {
                aspectRatio: 1.4678899082568808,
                sizes: '(max-width: 1800px) 100vw, 1800px',
                src: 'someurl2',
                srcSet: 'someurl2',
              },
            },
          ],
        },
      },
    ],
  },
};

describe('Tests for Projects template', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ProjectsTemplate
        location={{ pathname: '/test' }}
        pageContext={{ seo: { title: 'test', keywords: ['a', 'b'] } }}
        data={mockData}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly without any projects', () => {
    const wrapper = shallow(
      <ProjectsTemplate
        location={{ pathname: '/test' }}
        pageContext={{ seo: { title: 'test', keywords: ['a', 'b'] } }}
        data={{
          noContentImage: {
            childImageSharp: {
              fluid: {
                aspectRatio: 1.4678899082568808,
                sizes: '(max-width: 1800px) 100vw, 1800px',
                src: 'someurl2',
                srcSet: 'someurl2',
              },
            },
          },
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
