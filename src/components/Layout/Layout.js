import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';

import Header from '../Header';

const Layout = ({children, path, color, menuBackground, menuColor, width}) => (
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
      <div id="outer-container">
        <Header
          siteTitle={data.site.siteMetadata.title}
          path={path}
          color={color}
          menuBackground={menuBackground}
          menuColor={menuColor}
        />
        {children}
      </div>
    )}
  />
);

Layout.propTypes = {
  color: PropTypes.shape ({hex: PropTypes.string}),
  menuColor: PropTypes.shape ({hex: PropTypes.string}),
  menuBackground: PropTypes.shape ({hex: PropTypes.string}),
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  color: {hex: '#000'},
  menuColor: {hex: '#fff'},
  menuBackground: {hex: '#000'},
};

export default Layout;
