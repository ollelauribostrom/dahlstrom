const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allDatoCmsWork {
            edges {
              node {
                title
                slug
                category {
                  slug
                }
              }
            }
          }
        }
      `
    ).then(({ data }) => {
      data.allDatoCmsWork.edges.forEach(edge => {
        const { slug, title } = edge.node;
        createPage({
          path: slug,
          component: path.resolve('./src/templates/project.js'),
          context: {
            slug,
            seo: {
              title,
              keywords: ['Work', title],
            },
          },
        });
      });
      resolve();
    });
  });
};
