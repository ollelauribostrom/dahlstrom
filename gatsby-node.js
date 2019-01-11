/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require ('path');
const createSlug = require ('./src/utils/createSlug');

function getCategories (edges) {
  const data = edges.map (edge => edge.node).filter (node => node.work)[0];
  const works = data.work;
  const categories = {};
  works.forEach (work => {
    if (categories[work.category]) {
      categories[work.category].items.push (work);
    } else {
      categories[work.category] = {
        items: [work],
      };
    }
  });
  return categories;
}

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise ((resolve, reject) => {
    graphql (
      `
      {
        allDataJson {
          edges {
            node {
              work {
                title
                description
                images
                category
              }
            }
          }
        }
      }
    `
    ).then (result => {
      const categories = getCategories (result.data.allDataJson.edges);
      Object.keys (categories).forEach (categoryName => {
        const category = categories[categoryName];
        category.items.forEach (item => {
          item.slug = createSlug (`/${categoryName}/${item.title}`);
          createPage ({
            path: item.slug,
            component: path.resolve (`./src/templates/project.js`),
            context: {
              data: item,
              images: item.images,
            },
          });
        });
        createPage ({
          path: createSlug (`/${categoryName}/`),
          component: path.resolve (`./src/templates/projects.js`),
          context: {
            data: category,
            category: categoryName,
            images: category.items.map (item => item.images[0]),
          },
        });
      });
      resolve ();
    });
  });
};
