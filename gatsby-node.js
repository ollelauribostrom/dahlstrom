const path = require ('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise ((resolve, reject) => {
    graphql (
      `
      {
        allDatoCmsWork(
          sort: { fields: [date] order: DESC}
        ) {
          edges {
            node {
              slug
              category {
                slug
              }
            }
          }
        }
        allDatoCmsCategory {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
    ).then (({data}) => {
      data.allDatoCmsCategory.edges.forEach (edge => {
        const category = edge.node;
        const categoryWork = data.allDatoCmsWork.edges.filter (
          edge => edge.node.category.slug === category.slug
        );
        categoryWork.forEach (work =>
          createPage ({
            path: work.node.slug,
            component: path.resolve ('./src/templates/project.js'),
            context: {
              slug: work.node.slug,
            },
          })
        );
        createPage ({
          path: category.slug,
          component: path.resolve ('./src/templates/projects.js'),
          context: {
            slugs: categoryWork.map (edge => edge.node.slug),
          },
        });
      });
      resolve ();
    });
  });
};
