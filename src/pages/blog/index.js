import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BlogpostCard from '../../components/blogpostCard';

import styles from '../../styles/pages/blogIndex.module.scss';

const Blog = ({ data }) => {
  const { edges: pages } = data.allMarkdownRemark;

  console.log(pages);
  return (
    <Layout>
      <SEO title="Blog" />
      <section className={`container ${styles.wrapper}`}>
        {pages &&
          pages.map(({ node: page }) => (
            <BlogpostCard
              key={page.id}
              img={page.frontmatter.featuredimage.childImageSharp.fixed}
              title={page.frontmatter.title}
            />
          ))}
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
            date
            description
            featuredimage {
              childImageSharp {
                fixed(width: 330, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;
