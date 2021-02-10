/*
 * Gatsby Node API
 *
 * Implement `Async/await`, `Promise` and `Callback` APIs from this file.
 *
 * Gatsby Node API: https://www.gatsbyjs.org/docs/node-apis
 */

const path = require(`path`)
const { node } = require("prop-types")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const postTemplate = path.resolve(
        `src/06_Templates/PostTemplate/PostTemplate.js`
    )
    const pageTemplate = path.resolve(
        `src/06_Templates/PageTemplate/PageTemplate.js`
    )

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            type
                            path
                        }
                    }
                }
            }
        }
    `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.type === "page") {
            createPage({
                path: node.frontmatter.path,
                component: pageTemplate,
                context: {}, // additional data can be passed via context
            })
        } else {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
                context: {}, // additional data can be passed via context
            })
        }
    })
}
