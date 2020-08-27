import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../styles/components/blogPostCard.module.scss';

const BlogpostCard = ({ img, title, description, link, tags }) => {
  return (
    <article className={styles.card}>
      <Img fixed={img} className={styles.img} />
      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.copy}>
          {description}
          <Link to={link}>Continue reading</Link>
        </p>
        <p>{tags}</p>
      </div>
    </article>
  );
};

export default BlogpostCard;
