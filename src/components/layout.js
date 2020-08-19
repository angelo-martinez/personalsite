import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './sidebar';
import styles from '../styles/components/layout.module.scss';

const Layout = (props) => {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
