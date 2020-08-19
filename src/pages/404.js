import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      className="container"
      style={{ textAlign: 'center', paddingTop: '50px', color: '#dfe3b9' }}
    >
      <h1 style={{ marginBottom: '15px' }}>NOT FOUND</h1>
      <p>I still haven't written that post yet... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
