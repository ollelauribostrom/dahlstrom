import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ResumeSection = props => (
  <div style={{padding: '20px 0'}}>
    <h3 style={{marginBottom: '5px', color: '#6e297a', fontSize: '16px'}}>
      {props.title}
    </h3>
    {props.children}
  </div>
);

const LinkItem = ({description, href}) => {
  if (href && href !== '') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={description}
        style={{display: 'block'}}
      >
        {description}
      </a>
    );
  }
  return <span style={{display: 'block'}}>{description}</span>;
};

const Education = ({data}) => (
  <ResumeSection title="Education">
    {data.map (text => <span style={{display: 'block'}}>{text}</span>)}
  </ResumeSection>
);

const Exhibitions = ({data}) => (
  <ResumeSection title="Exhibitions">
    {data.map (item => (
      <LinkItem description={item.description} href={item.href} />
    ))}
  </ResumeSection>
);

const Fellowships = ({data}) => (
  <ResumeSection title="Fellowships">
    {data.map (item => (
      <LinkItem description={item.description} href={item.href} />
    ))}
  </ResumeSection>
);

const Resume = props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        allDataJson {
          edges {
            node {
              education
              exhibitions {
                description
                href
              }
              fellowships {
                description
                href
              }
            }
          }
        }
      }
    `}
    render={data => {
      const education = data.allDataJson.edges[0].node.education;
      const exhibitions = data.allDataJson.edges[0].node.exhibitions;
      const fellowships = data.allDataJson.edges[0].node.fellowships;
      return (
        <Layout hideOverFlow={true} path={props.location.pathname}>
          <SEO title="Resume" keywords={[`resume`, `cv`]} />
          <Education data={education} />
          <Exhibitions data={exhibitions} />
          <Fellowships data={fellowships} />
        </Layout>
      );
    }}
  />
);
export default Resume;
