import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

import styles from '../../styles/pages/blogIndex.module.scss';

const Blog = ({ data }) => {
  const { edges: pages } = data.allMarkdownRemark;

  console.log(pages);
  return (
    <Layout>
      <SEO title="Blog" />
      <section className={`container ${styles.wrapper}`}>
        {pages &&
          pages.map(({ node: page }) => {
            return (
              <div key={page.id}>
                <h1>{page.frontmatter.title}</h1>
              </div>
            );
          })}
      </section>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
