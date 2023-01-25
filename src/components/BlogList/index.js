import React from 'react'
import BlogCard from '../BlogCard'
import * as styles from './styles.module.scss'

function BlogList({articles}) {
  return (
    <ul className={styles.blogList}>
      {articles.map((article) => (
        <li key={article.id}>
          <BlogCard article={article.frontmatter}/>
        </li>
      ))}
    </ul>
  )
}

export default BlogList
