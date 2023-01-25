import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react"
import Layout from "../../components/Layout"
import * as styles from './styles.module.scss'

const Article = ({data}) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  const image = getImage(featuredImg);

  return (
    <Layout>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        {stack && (
          <h3 className={styles.subtitle}>{stack}</h3>
        )}
        <GatsbyImage image={image} alt={title} className={styles.img}/>
        {html && (
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query Article($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.86)
          }
        }
      }
    }
  }
`
