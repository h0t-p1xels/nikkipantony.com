/**
 * SEO Component
 *
 * Gatsby SEO Component: https://www.gatsbyjs.org/docs/add-seo-component
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        author,
        defaultDescription,
        defaultImage,
        defaultTitle,
        titleTemplate,
        twitterUsername,
        siteUrl,
        lang,
    } = site.siteMetadata

    const seo = {
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        title: title || defaultTitle,
        url: `${siteUrl}${pathname}`,
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={seo.title}
            titleTemplate={titleTemplate}
        >
            <meta charSet="utf-8" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="author" content={author}></meta>

            {seo.url && <meta property="og:url" content={seo.url} />}

            {(article ? true : null) && (
                <meta property="og:type" content="article" />
            )}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}

            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    )
}

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                author
                defaultDescription: description
                defaultImage: image
                defaultTitle: title
                titleTemplate
                twitterUsername
                siteUrl: url
                lang
            }
        }
    }
`
