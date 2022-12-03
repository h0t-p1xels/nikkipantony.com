/*
 * Page Template Component
 *
 */

// import React from "react"
// import { graphql } from "gatsby"
// import DarkMode from "../../8_Utilities/DarkMode"
// import SEO from "../../8_Utilities/SEO"

// export default function Template({
//   data, // This prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark

//   return (
//     <>
//       <DarkMode />
//       <SEO title={frontmatter.seoTitle} />
//       <main>
//         <section dangerouslySetInnerHTML={{ __html: html }}></section>
//         {frontmatter.link ? (
//           <a href={frontmatter.link} rel="noopener noreferrer" target="_blank">
//             LinkedIn Icon
//           </a>
//         ) : (
//           <></>
//         )}
//       </main>
//       <hr />
//       <footer className="footer">
//         <div className="footer__inner">
//           <p className="footer__text">
//             <small>&copy; {new Date().getFullYear()} SEED.</small>
//           </p>
//         </div>
//       </footer>
//     </>
//   )
// }

// export const pageQuery = graphql`
//   query ($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       frontmatter {
//         type
//         path
//         date(formatString: "DD  MMMM, YYYY")
//         seoTitle
//         link
//       }
//       html
//     }
//   }
// `
