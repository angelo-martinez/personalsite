import React from 'react';
import { Link } from 'gatsby';

import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Navbar;
