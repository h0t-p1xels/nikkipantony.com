/*
 * Storybook Preview Configuration
 * Configures Storybook global decorators and parameters.
 * Storybook docs: https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 *
 */

// Contents
// ========
// * SASS Styles
// * Focus-Visible Support
// * Brand Image
// * Actions Addon
// * Light/Dark Theming
// * Gatsby Configuration

// * SASS Styles
// =============
// Import styles with loaders to Storybook
import "!style-loader!css-loader!sass-loader!../src/9_Styles/Index.scss"

// * Focus-Visible Support
// =======================
// Import `focus-visible` globally within Storybook so it is applied in component stories
import "focus-visible"

// * Brand Image
// =============
// Import custom Storybook brand image
import storybookBrandImage from "./StorybookBrandImage.svg"

// * Actions Addon
// ===============
// Import Storybook Actions addon
import { action } from "@storybook/addon-actions"

// * Light/Dark Theming
// ====================
// Import theming from Storybook
import { themes } from "@storybook/theming"

// Detect if users preferred color scheme is dark
const isDark =
  typeof window !== `undefined`
    ? window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    : null

// Custom Addon Parameters
export const parameters = {
  darkMode: {
    // Set initial theme based on users preferred color scheme
    current: isDark ? "dark" : "light",

    // Add light base theme
    light: {
      ...themes.normal,

      // Theme Variables
      // --ally-gold: #ffd700;
      // --ally-gold--dark: #ffe343;
      // --ally-gold--hover: #fde978;
      // --ally-midnight: #000013;
      // --ally-midnight--dark: #dddddd;
      // --ally-snow: #fefefe;
      // --ally-snow--dark: #333333;
      // --ally-snow--code: #1f1f1f;
      // --ally-rubik: "Rubik", sans-serif;
      // --ally-archivo: "Archivo", sans-serif;
      // --ally-mono: "IBM Plex Mono", monospace;

      // Branding
      brandTitle: "AllY Starter Kit", // Title text, still shows on hover if storybookBrandImage is set
      brandUrl: "/", // URL opens in new tab
      brandImage: storybookBrandImage, // For best results make this either a SVG or PNG file, 165px x 30px, with a transparent background
      brandTarget: "_self",

      // Typography
      fontBase: '"Rubik", sans-serif', // --ally-rubik
      fontCode: '"IBM Plex Mono", monospace', // --ally-mono

      // Borders
      appBorderRadius: "4px",
      inputBorderRadius: "4px",

      // Theme base colors
      colorPrimary: "#000013", // --ally-midnight
      colorSecondary: "#000013", // --ally-midnight

      // UI colors
      appBg: "#fefefe", // --ally-snow
      appContentBg: "#fefefe", // --ally-snow
      appBorderColor: "#ffd700", // --ally-gold

      // Text colors
      textColor: "#000013", // --ally-midnight
      textInverseColor: "#000013", // --ally-midnight

      // Toolbar and active colors
      barTextColor: "#000013", // --ally-midnight
      barSelectedColor: "#000013", // --ally-midnight
      barBg: "#ffd700", // --ally-gold

      // Form colors
      inputBg: "#fefefe", // --ally-snow
      inputBorder: "#ffd700", // --ally-gold
      inputTextColor: "#000013", // --ally-midnight
    },
    // Add dark base theming
    dark: {
      ...themes.dark,

      // Typography
      fontBase: '"Rubik", sans-serif', // --ally-rubik
      fontCode: '"IBM Plex Mono", monospace', // --ally-mono

      // Borders
      appBorderRadius: "4px",
      inputBorderRadius: "4px",

      // Theme base colors
      colorPrimary: "#fefefe", // --ally-midnight--dark
      colorSecondary: "#000013", // --ally-midnight

      // UI colors
      appBg: "#333333", // --ally-snow--dark
      appContentBg: "#333333", // --ally-snow--dark
      appBorderColor: "#ffe343", // --ally-gold--dark

      // Text colors
      textColor: "#dddddd", // --ally-midnight--dark
      textInverseColor: "#000013", // --ally-midnight

      // Toolbar and active colors
      barTextColor: "#000013", // --ally-midnight
      barSelectedColor: "#000013", // --ally-midnight
      barBg: "#ffe343", // --ally-gold--dark

      // Form colors
      inputBg: "#333333", // --ally-snow--dark
      inputBorder: "#ffe343", // --ally-gold--dark
      inputTextColor: "#dddddd", // --ally-midnight--dark
    },
    // Dark class name
    darkClass: "--dark",
    // darkClass: "lights-out", // Default
    // Light class name
    lightClass: "--light",
    // lightClass: "lights-on", // Default
    // Apply darkClass and lightClass classes to the preview iframe also
    stylePreview: true,
  },
}

// * Gatsby Configuration
// ======================
// - Use with Gatsby V4

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname)
}

// export const parameters = {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//         matchers: {
//             color: /(background|color)$/i,
//             date: /Date$/,
//         },
//     },
// }
