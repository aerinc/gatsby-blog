import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image" 
import SEO from "../components/seo"

const Title = styled.h1`
display: inline-block;
`

const BlogTitle = styled.h3`
margin-bottom: 20px;

&:hover {
  color: #1dcaff;
}
`

const BlogLink = styled(Link)`
text-decoration: none;
color: inherit;
`
const BlogBody = styled.div`
margin-bottom: 50px;
`

export default ({ data }) => {
  return (
  <Layout>
    <SEO title="Home" />
    <div>
      <h2>Latest posts</h2>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogBody key={node.id}>
            <BlogLink to={node.fields.slug}>
            <BlogTitle>{node.frontmatter.title} - <small>{node.frontmatter.date}</small></BlogTitle>
            </BlogLink>
            <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
            <p>{node.excerpt}</p>
          </BlogBody>
        ))}
    </div>
  </Layout>
 )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
                childImageSharp {
                  sizes(maxWidth: 630) {
                    ...GatsbyImageSharpSizes
                  }
                }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;



