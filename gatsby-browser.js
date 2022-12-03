/*
 * Gatsby's Browser API
 *
 * Implement Gatsby's Browser APIs in this file.
 *
 * Gatsby's Browser API: https://www.gatsbyjs.org/docs/browser-apis
 * Introduction to Styling in Gatsby: https://www.gatsbyjs.org/tutorial/part-two
 */

// These imports would usually be placed in the `MainLayout` file
// However, if imported this way they cause an error when being loaded as storybook stories
// They are instead included here for Gatsby and in `.storybook/preview.js` for Storybook

// Import `focus-visible` package
import "focus-visible"

// Import Google Fonts locally via FontSource
// import "@fontsource/raleway" // Does not include Raleway Black :(
import "@fontsource/lato"
import "@fontsource/ibm-plex-mono"

// Import styles to Gatsby
import "/src/9_Styles/Index.scss"
