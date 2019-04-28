import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

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
      <Section
        title="Education"
        titleColor={props.data.datoCmsSetting.headingColor}
      >
        {props.data.allDatoCmsEducation.edges.map((edge, i) => (
          <SectionItem
            description={edge.node.description}
            href={edge.node.href}
            key={`education-${i}`}
          />
        ))}
      </Section>
      <Section
        title="Exhibitions"
        titleColor={props.data.datoCmsSetting.headingColor}
      >
        {props.data.allDatoCmsExhibition.edges.map((edge, i) => (
          <SectionItem
            description={edge.node.description}
            href={edge.node.href}
            key={`exhibition-${i}`}
          />
        ))}
      </Section>
      <Section
        title="Fellowships, Grants, Residencies"
        titleColor={props.data.datoCmsSetting.headingColor}
      >
        {props.data.allDatoCmsGrant.edges.map((edge, i) => (
          <SectionItem
            description={edge.node.description}
            href={edge.node.href}
            key={`grant-${i}`}
          />
        ))}
      </Section>
      <Img
        fluid={props.data.datoCmsSetting.resumeImage.fluid}
        style={{
          width: '150px',
          height: '150px',
          float: 'right',
          marginTop: '-50px',
        }}
      />
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
    datoCmsSetting {
      headingColor {
        hex
      }
      resumeImage {
        url
        fluid(maxWidth: 150, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;

export default Resume;
