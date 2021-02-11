/*
 * Image Component Stories
 *
 * Serving static files via a directory: https://storybook.js.org/docs/configurations/serving-static-files/#2-via-a-directory
 * Help solving Gatsby/Storybook StaticQuery Issue: https://github.com/gatsbyjs/gatsby/issues/12007#issuecomment-467730610
 */

import React from "react"
import Avatar from "./Avatar"

export default {
    title: "Atoms/Avatar",
    component: Avatar,
}

export const maxWidth500 = () => <Avatar />
