import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "Avatar.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div className="avatar">
            <Img
                fluid={data.file.childImageSharp.fluid}
                className="avatar__image"
                alt="Nikki Pantony in a green field with a tree."
                fadeIn={true}
                loading="eager"
            />
        </div>
    )
}

export default Avatar
