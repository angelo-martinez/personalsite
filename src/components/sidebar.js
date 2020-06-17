import React from 'react';
import { Link } from 'gatsby';

import styles from './sidebar.module.scss';

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className="container">
        <section className="intro">
          <div>image</div>
          <h1>Angelo Martinez</h1>
          <h2>front-end dev</h2>
        </section>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <section className="social">
          <div>github</div>
          <div>linkedin</div>
          <div>twitter</div>
        </section>
      </div>
    </aside>
  );
};

export default SideBar;
