const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/article/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/article/index.js'),
      context: { slug: node.frontmatter.slug }
    })
  })
}
