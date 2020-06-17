import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import Footer from './footer';

import layoutStyles from './layout.module.scss';

const Layout = (props) => {
  return (
    <div className={layoutStyles.wrapper}>
      <div className={layoutStyles.content}>
        <Navbar />
        <main>{props.children}</main>
      </div>
      <Footer footerCta={props.footerCta} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
