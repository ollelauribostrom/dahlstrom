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
              title
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
              name
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
              seo: {
                title: work.node.title,
                keywords: ['Work', work.node.title],
              },
            },
          })
        );
        createPage ({
          path: category.slug,
          component: path.resolve ('./src/templates/projects.js'),
          context: {
            slugs: categoryWork.map (edge => edge.node.slug),
            seo: {
              title: category.name,
              keywords: [category.name],
            },
          },
        });
      });
      resolve ();
    });
  });
};
