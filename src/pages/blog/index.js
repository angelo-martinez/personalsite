import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Blog = ({ data }) => {
  const { edges: pages } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="container">
        {pages &&
          pages.map(({ node: page }) => <h1>{page.frontmatter.title}</h1>)}
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
