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
// import Contact from "../04_Molecules/Contact/Contact"
// import Social from "../04_Molecules/SocialIcons/SocialIcons"
// import Avatar from "../03_Atoms/Avatar/Avatar"

const IndexPage = () => (
  <PageTemplate>
    <SEO
      lang="en"
      title="Digital Product Designer and Web Developer."
      description="I'm passionate about designing and building fast, secure and scalable digital products that achieve business goals, build value and convert visitors to customers."
    />
    {/* <Avatar /> */}
    <div>
      <h1>NIKKI PANTONY</h1>
      <p>Digital Product Designer, Web Developer & soon to be Founder.</p>
      {/* <Contact /> */}
      {/* <Social /> */}
    </div>
  </PageTemplate>
)

export default IndexPage
