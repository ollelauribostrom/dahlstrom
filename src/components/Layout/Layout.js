import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';

import Header from '../Header';

const Layout = ({
  children,
  path,
  color,
  menuBackground,
  menuColor,
  width,
  display,
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
      <div id="outer-container">
        <Header
          siteTitle={data.site.siteMetadata.title}
          path={path}
          color={color}
          menuBackground={menuBackground}
          menuColor={menuColor}
        />
        <div
          className="content-wrapper"
          style={{maxWidth: `${width}px`, display}}
        >
          {children}
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  color: PropTypes.shape ({hex: PropTypes.string}),
  display: PropTypes.string,
  menuColor: PropTypes.shape ({hex: PropTypes.string}),
  menuBackground: PropTypes.shape ({hex: PropTypes.string}),
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  color: {hex: '#000'},
  display: 'block',
  menuColor: {hex: '#fff'},
  menuBackground: {hex: '#000'},
  width: 810,
};

export default Layout;
