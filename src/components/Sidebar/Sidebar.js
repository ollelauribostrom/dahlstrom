import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import { push as Menu } from 'react-burger-menu';

const Sidebar = ({ color, menuColor, menuBackground }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsCategory {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <Menu
        right
        outerContainerId={'outer-container'}
        styles={{
          bmBurgerButton: {
            position: 'relative',
            width: '30px',
            height: '25px',
          },
          bmBurgerBars: {
            background: color.hex,
          },
          bmBurgerBarsHover: {
            background: '#a90000',
          },
          bmMenu: {
            background: menuBackground.hex,
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
          },
          bmMenuWrap: {
            top: '0px',
          },
          bmMorphShape: {
            fill: '#373a47',
          },
          bmItemList: {
            padding: '0.8em',
          },
          bmOverlay: {
            background: 'rgba(0, 0, 0, 0.1)',
            top: 0,
            left: 0,
          },
        }}
        width={250}
      >
        <div
          className="sidebar__section"
          style={{
            marginBottom: '40px',
          }}
        >
          <h3 style={{ marginBottom: '5px', color: '#6e297a' }}>Work</h3>
          {data.allDatoCmsCategory.edges.map(edge => (
            <Link
              to={edge.node.slug}
              style={{
                color: menuColor.hex,
                textDecoration: 'none',
                display: 'block',
                margin: '20px 0',
              }}
            >
              {edge.node.name}
            </Link>
          ))}
        </div>
        <div className="sidebar__section">
          <h3 style={{ marginBottom: '5px', color: '#6e297a' }}>About</h3>
          <Link
            to="/resume"
            style={{
              color: menuColor.hex,
              textDecoration: 'none',
              display: 'block',
              margin: '20px 0',
            }}
          >
            resume
          </Link>
          <Link
            to="/contact"
            style={{
              color: menuColor.hex,
              textDecoration: 'none',
              display: 'block',
              margin: '20px 0',
            }}
          >
            contact
          </Link>
        </div>
      </Menu>
    )}
  />
);

Sidebar.propTypes = {};

export default Sidebar;
