import React from 'react';
import PropTypes from 'prop-types';

import SideBar from './sidebar';
import Footer from './footer';

import layoutStyles from './layout.module.scss';

const Layout = (props) => {
  return (
    <>
      <SideBar />
      <main>{props.children}</main>
      <Footer footerCta={props.footerCta} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
