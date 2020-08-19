import React from 'react';
import Img from 'gatsby-image';
import styles from '../styles/components/blogPostCard.module.scss';

const BlogpostCard = ({ img, title, description, link }) => {
  return (
    <article className={styles.card}>
      <Img fixed={img} />
      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.copy}>
          {description}
          <a href={link}>Continue reading</a>
        </p>
      </div>
    </article>
  );
};

export default BlogpostCard;
