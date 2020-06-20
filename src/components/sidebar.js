import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styles from './sidebar.module.scss';

const SideBar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile_opt.jpg" }) {
        childImageSharp {
          fixed(width: 180, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <aside className={styles.sidebar}>
      <section className={styles.intro}>
        <Img fixed={data.file.childImageSharp.fixed} />
        <h1 className={styles.name}>Angelo Martinez</h1>
        <h2 className={styles.title}>Front-End Dev</h2>
      </section>
      <nav>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/blog" className={styles.navLink}>
          Blog
        </Link>
      </nav>
      <section className={styles.social}>
        <a href="https://github.com/angelo-martinez/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/angelo-martinez/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/angelocodes">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </section>
    </aside>
  );
};

export default SideBar;
