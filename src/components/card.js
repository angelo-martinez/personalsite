import React from 'react';
import Img from 'gatsby-image';
import styles from './card.module.scss';

const Card = ({ img, name, stack, link }) => {
  return (
    <article className={styles.card}>
      <Img fluid={img} />
      <div className={styles.body}>
        <h4 className={styles.title}>{name}</h4>
        <p className={styles.copy}>
          {stack} <a href={link}>Github</a>{' '}
        </p>
      </div>
    </article>
  );
};

export default Card;
