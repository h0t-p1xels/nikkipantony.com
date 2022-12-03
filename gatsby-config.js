/*
 * Gatsby Configuration
 *
 * Add Gatsby configuration options in this file.
 *
 * Gatsby Configuration: https://www.gatsbyjs.org/docs/gatsby-config
 */

module.exports = {
  siteMetadata: {
    title: `Seed.`,
    description: `Creating value through innovative digital experiences.`,
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://weareseed.co`,
    author: `Nikki Pantony`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADDYOURTRAKINGID`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    // TODO: Update Sitemap Config
    // For details visit: https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     query: `
    //     {
    //       allSitePage {
    //         nodes {
    //           path
    //         }
    //       }
    //       allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
    //         nodes {
    //           ... on WpPost {
    //             uri
    //             modifiedGmt
    //           }
    //           ... on WpPage {
    //             uri
    //             modifiedGmt
    //           }
    //         }
    //       }
    //     }
    //   `,
    //     resolveSiteUrl: () => siteUrl,
    //     resolvePages: ({
    //       allSitePage: { nodes: allPages },
    //       allWpContentNode: { nodes: allWpNodes },
    //     }) => {
    //       const wpNodeMap = allWpNodes.reduce((acc, node) => {
    //         const { uri } = node
    //         acc[uri] = node

    //         return acc
    //       }, {})

    //       return allPages.map((page) => {
    //         return { ...page, ...wpNodeMap[page.path] }
    //       })
    //     },
    //     serialize: ({ path, modifiedGmt }) => {
    //       return {
    //         url: path,
    //         lastmod: modifiedGmt,
    //       }
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `weareseed`,
        short_name: `weareseed`,
        start_url: `/`,
        background_color: `#06060d`,
        theme_color: `#06060d`,
        display: `minimal-ui`, // https://developer.mozilla.org/en-US/docs/Web/Manifest/display
        icon: `${__dirname}/favicon.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/7_Assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/6_Pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/6_Pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          extensions: [`.mdx`, `.md`],
          pages: require.resolve(
            `${__dirname}/src/5_Templates/PageTemplate/PageTemplate.js`
          ),
          default: require.resolve(
            `${__dirname}/src/5_Templates/PageTemplate/PageTemplate.js`
          ),
        },
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `DesignTokenJson`, // Name Json to Query
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/design-tokens.json`,
      },
    },
    // This optional plugin integrates react-axe for a11y testing
    // To learn more, visit: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-axe
    // {
    //   resolve: "gatsby-plugin-react-axe",
    //   options: {
    //     // Number of milliseconds to wait for component updates to cease before
    //     // performing an analysis of all the changes. This defaults to 1000ms (1 second).
    //     debounce: 1000,
    //     // Do not integrate react-axe in production.
    //     showInProduction: false,
    //     // Options to pass to axe-core.
    //     // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
    //     // axeOptions: {
    //     // Your axe-core options.
    //     // },
    //     // Context to pass to axe-core.
    //     // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter
    //     // axeContext: {
    //     // Your axe-core context.
    //     // },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://www.gatsbyjs.com/plugins/gatsby-plugin-offline / https://gatsby.dev/offline
    // https://www.gatsbyjs.com/docs/resource-handling-and-service-workers/#offline-plugin-gatsby-plugin-offline
    // `gatsby-plugin-offline`,
  ],
}
