/*
 * 404 Error Page
 *
 * Gatsby 404 Page: https://www.gatsbyjs.org/docs/add-404-page/
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 *
 */

import React from "react"
import SEO from "../8_Utilities/SEO"
import PageTemplate from "../5_Templates/PageTemplate/PageTemplate"
import SocialLinks from "../3_Molecules/SocialLinks/SocialLinks"
import Avatar from "../2_Atoms/Avatar/Avatar"

const IndexPage = () => (
  <>
    <SEO
      lang="en"
      title="Digital Product Designer and Web Developer."
      description="I'm passionate about designing and building fast, secure and scalable digital products that achieve business goals, build value and convert visitors to customers."
    />
    <PageTemplate>
      <Avatar />
      <h1>NIKKI PANTONY</h1>
      <p className="sub-heading">
        Digital product designer, jamstack web developer & founder @{" "}
        <a href="http://weareseed.co" rel="noopener" target="_blank">
          weareseed.co
        </a>
      </p>
      <SocialLinks />
    </PageTemplate>
  </>
)

export default IndexPage
