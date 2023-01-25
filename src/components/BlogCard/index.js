import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from './styles.module.scss'
import { Link } from 'gatsby';

function BlogCard({article}) {
  const {thumb, date, title, slug} = article;
  const image = getImage(thumb);
  const dateObject = new Date(date);

  return (
    <article className={styles.blogCard}>
      <Link className={styles.link} to={`/article/${slug}`}>
        <GatsbyImage image={image} alt={title} className={styles.img}/>
        <p className={styles.date}>{dateObject.toLocaleDateString()}</p>
        <p className={styles.title}>{title}</p>
      </Link>
    </article>
  )
}

export default BlogCard
