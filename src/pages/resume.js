import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import SectionItem from '../components/SectionItem';

const Resume = props => {
  return (
    <Layout path={props.location.pathname}>
      <SEO
        title="Resume"
        keywords={[
          `resume`,
          `cv`,
          'education',
          'exhibitions',
          'fellowships',
          'grants',
          'residencies',
        ]}
      />
      <Section title="Education">
        {props.data.allDatoCmsEducation.edges.map((edge, i) => (
          <SectionItem
            description={edge.node.description}
            href={edge.node.href}
            key={`education-${i}`}
          />
        ))}
      </Section>
      <Section title="Exhibitions">
        {props.data.allDatoCmsExhibition.edges.map((edge, i) => (
          <SectionItem
            description={edge.node.description}
            href={edge.node.href}
            key={`exhibition-${i}`}
          />
        ))}
      </Section>
      <Section title="Fellowships, Grants, Residencies">
        {props.data.allDatoCmsGrant.edges.map((edge, i) => (
          <SectionItem
            description={edge.node.description}
            href={edge.node.href}
            key={`grant-${i}`}
          />
        ))}
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allDatoCmsGrant(sort: { fields: [year], order: DESC }) {
      edges {
        node {
          description
          href
        }
      }
    }
    allDatoCmsExhibition(sort: { fields: [year], order: DESC }) {
      edges {
        node {
          description
          href
        }
      }
    }
    allDatoCmsEducation(sort: { fields: [year], order: DESC }) {
      edges {
        node {
          description
        }
      }
    }
  }
`;

export default Resume;
