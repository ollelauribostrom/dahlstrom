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
  console.log (href);
  if (href) {
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

const Resume = props => {
  return (
    <Layout hideOverFlow={true} path={props.location.pathname}>
      <SEO title="Resume" keywords={[`resume`, `cv`]} />
      <ResumeSection title="Education">
        {props.data.allDatoCmsEducation.edges.map (edge => (
          <span style={{display: 'block'}}>{edge.node.description}</span>
        ))}
      </ResumeSection>
      <ResumeSection title="Exhibitions">
        {props.data.allDatoCmsExhibition.edges.map (edge => (
          <LinkItem description={edge.node.description} href={edge.node.href} />
        ))}
      </ResumeSection>
      <ResumeSection title="Fellowships, Grants, Commissions, Residencies">
        {props.data.allDatoCmsGrant.edges.map (edge => (
          <LinkItem description={edge.node.description} href={edge.node.href} />
        ))}
      </ResumeSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    allDatoCmsGrant(sort: {
      fields: [year]
      order: DESC
    }) {
      edges {
        node {
          description
          href
        }
      }
    }
    allDatoCmsExhibition(sort: {
      fields: [year]
      order: DESC
    }) {
      edges {
        node {
          description
          href
        }
      }
    }
    allDatoCmsEducation(sort: {
      fields: [year]
      order: DESC
    }) {
      edges {
        node {
          description
        }
      }
    }
  }
`;

export default Resume;
