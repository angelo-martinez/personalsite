import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';
import styles from '../styles/components/blogPostCard.module.scss';

const BlogpostCard = ({ img, title, description, link, tags }) => {
  const tagsItems = tags.map((tag) => (
    <li key={tag + `tag`}>
      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
    </li>
  ));
  return (
    <article className={styles.card}>
      <Img fixed={img} className={styles.img} />
      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.copy}>
          {description}
          <Link to={link}>Continue reading</Link>
        </p>
        <ul className={styles.tags}>{tagsItems}</ul>
      </div>
    </article>
  );
};

export default BlogpostCard;
