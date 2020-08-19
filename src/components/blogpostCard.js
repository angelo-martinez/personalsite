import React from 'react';
import Img from 'gatsby-image';
import styles from '../styles/components/blogPostCard.module.scss';

const Card = ({ img, name, description, link }) => {
  return (
    <article className={styles.card}>
      <Img fluid={img} />
      <div className={styles.body}>
        <h4 className={styles.title}>{name}</h4>
        <p className={styles.copy}>
          {description}
          <a href={link}>Continue reading</a>
        </p>
      </div>
    </article>
  );
};

export default Card;
