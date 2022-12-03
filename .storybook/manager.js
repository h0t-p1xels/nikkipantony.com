/*
 * Storybook Manager Configuration
 * Manages Storybook UI options.
 * Storybook docs: https://storybook.js.org/docs/configurations/overview/#manager--preview
 *
 */

// Import custom favicon icon
import favicon from "../public/icons/icon-192x192.png"
const link = document.createElement("link")
link.setAttribute("rel", "shortcut icon")
link.setAttribute("href", favicon)
document.head.appendChild(link)

// import { addons } from "@storybook/addons"

// addons.setConfig({
// })
