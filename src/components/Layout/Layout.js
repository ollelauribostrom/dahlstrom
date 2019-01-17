import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = ({
  children,
  hideOverFlow,
  path,
  color,
  menuBackground,
  menuColor,
}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        id="outer-container"
        style={{
          padding: '50px',
        }}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          path={path}
          color={color}
          menuBackground={menuBackground}
          menuColor={menuColor}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  color: { hex: '#000' },
  menuColor: { hex: '#fff' },
  menuBackground: { hex: '#000' },
};

export default Layout;
