import { graphql, useStaticQuery } from "gatsby";
import * as React from "react"
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";

const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          date
          thumb {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                aspectRatio: 1
              )
            }
          }
        }
      }
    }
  }
`
const IndexPage = () => {
  const data = useStaticQuery(query);
  const articlesData = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className="container">
        <BlogList articles={articlesData} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
