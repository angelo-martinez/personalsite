import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';
import styles from '../styles/components/blogPostCard.module.scss';

const BlogpostCard = ({ img, title, description, link, collections }) => {
  const collectionsItems = collections.map((collection) => (
    <li key={collection}>
      <Link to={`/collections/${kebabCase(collection)}/`}>#{collection}</Link>
    </li>
  ));
  return (
    <article className={styles.card}>
      <Img fluid={img} className={styles.img} />
      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.copy}>
          {description}
          <Link to={link}>Continue reading</Link>
        </p>
        <ul className={styles.collections}>{collectionsItems}</ul>
      </div>
    </article>
  );
};

export default BlogpostCard;
