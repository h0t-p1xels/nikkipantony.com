/*
 * Gatsby Configuration
 *
 * Add Gatsby configuration options in this file.
 *
 * Gatsby Configuration: https://www.gatsbyjs.org/docs/gatsby-config
 */

module.exports = {
  siteMetadata: {
    title: `Nikki Pantony`,
    titleTemplate: `%s Nikki Pantony`,
    description: `Personal website of Independent UI/UX Product Designer and Front-End Web Developer Nikki Pantony.`,
    siteUrl: "https://www.nikkipantony.com", // Remember no trailing slash
    image: "/socialmedia_images/nikkipantony-com.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@nikkipantony",
    author: `Nikki Pantony @nikkipantony`,
    lang: `en`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADDYOURTRAKINGID`,
    //   },
    // },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
  ],
}
