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
            title="Independent UI/UX Product Designer and Front-End Web Developer."
            description="Working with JAMstack using Gatsby / ReactJS / GraphQL / Storybook. Big Figma fan for design. Web Accessibility and Design Systems Advocate."
        />
        <Avatar />
        <div>
            <h1>NIKKI PANTONY</h1>
            <p>
                Founder at{" "}
                <a
                    href="https://remoteprint.co"
                    target="_blank"
                    rel="noreferrer"
                >
                    RemotePrint
                </a>{" "}
                & Independent UI/UX Product Designer and Front-End Web
                Developer.
            </p>
            <Contact />
            <Social />
        </div>
    </Layout>
)

export default IndexPage
