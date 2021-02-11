/*
 * 404 Error Page
 *
 * Gatsby 404 Page: https://www.gatsbyjs.org/docs/add-404-page/
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 *
 */

import React from "react"
import Layout from "../06_Templates/Layout/Layout"
import Avatar from "../03_Atoms/Avatar/Avatar"
import Contact from "../04_Molecules/Contact/Contact"
import Social from "../04_Molecules/SocalIcons/SocialIcons"

const IndexPage = () => (
    <Layout>
        <Avatar />
        <div>
            <h1>NIKKI PANTONY</h1>
            <p>
                Independent UI/UX Product Designer and Front-End Web Developer
                creating delightful experiences built with JAMstack
                Technologies.
            </p>
            <Contact />
            <Social />
        </div>
    </Layout>
)

export default IndexPage
