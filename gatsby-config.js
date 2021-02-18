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
        url: "https://www.nikkipantony.com", // Remember no trailing slash
        image: "/nikkipantonycom.png", // Path to your image you placed in the 'static' folder
        twitterUsername: "@nikkipantony",
        author: `Nikki Pantony @nikkipantony`,
        lang: `en`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/08_Images/`,
            },
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/07_Pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/design_tokens/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nikki Pantony`,
                short_name: `Nikki Pantony`,
                start_url: `/`,
                background_color: `#000013`,
                theme_color: `#fefefe`,
                display: `minimal-ui`, // https://developer.mozilla.org/en-US/docs/Web/Manifest/display
                icon: `favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
