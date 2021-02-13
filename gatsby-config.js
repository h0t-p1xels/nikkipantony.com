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
        description: `Personal website of Independent UI/UX Product Designer and Front-End Web Developer Nikki Pantony.`,
        author: `@nikkipantony Nikki Pantony <hello@nikkipantony.com>`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/08_Images`,
            },
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/07_Pages`,
            },
        },

        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/design_tokens/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ally-starter-kit`,
                short_name: `ally-starter-kit`,
                start_url: `/`,
                background_color: `#542c85`,
                theme_color: `#542c85`,
                display: `minimal-ui`, // https://developer.mozilla.org/en-US/docs/Web/Manifest/display
                icon: `favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
