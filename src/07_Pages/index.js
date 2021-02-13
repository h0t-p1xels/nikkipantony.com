/*
 * 404 Error Page
 *
 * Gatsby 404 Page: https://www.gatsbyjs.org/docs/add-404-page/
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 *
 */

import React from "react"
import SEO from "../09_Utilities/SEO"
import Layout from "../06_Templates/Layout/Layout"
import Contact from "../04_Molecules/Contact/Contact"
import Social from "../04_Molecules/SocalIcons/SocialIcons"
import Avatar from "../03_Atoms/Avatar/Avatar"

const IndexPage = () => (
    <Layout>
        <SEO
            lang="en"
            title="UI/UX Product Designer and Front-End Web Developer. JAMstack Developer working with Gatsby / ReactJS and Storybook. Web Accessibility and Design Systems Advocate."
            description="Personal website of Independent UI/UX Product Designer and Front-End Web Developer Nikki Pantony"
        />
        <Avatar />
        <div>
            <h1>NIKKI PANTONY</h1>
            <p>
                Independent UI/UX Product Designer and Front-End Web Developer
                creating delightful experiences built with JAMstack
                Technologies.
            </p>
            <p>
                I am currently working with a Gatsby / ReactJS / Storybook /
                Figma stack and am a big Web Accessibility and Design Systems
                Advocate.
            </p>
            <Contact />
            <Social />
        </div>
    </Layout>
)

export default IndexPage
