import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "Avatar-NP.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <>
            {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
            <div
                className="avatar"
                tabIndex="0"
                role="region"
                aria-label="opens speech bubble"
            >
                <div className="avatar__speech-bubble">
                    <p>
                        Hi!{" "}
                        <span role="img" aria-label="waving hand">
                            👋
                        </span>
                    </p>
                </div>
                <Img
                    fluid={data.file.childImageSharp.fluid}
                    className="avatar__image"
                    alt="Nikki Pantony in a green field with a tree."
                    fadeIn={true}
                    loading="eager"
                />
            </div>
            {/* eslint-enable jsx-a11y/no-noninteractive-tabindex */}
        </>
    )
}

export default Avatar
