import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BlogpostCard from '../../components/blogpostCard';

const Blog = ({ data }) => {
  const { edges: pages } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="container">
        <h1
          style={{
            fontSize: '40px',
            marginBottom: '25px',
            textAlign: 'center',
          }}
        >
          Blog
        </h1>
        {pages &&
          pages.map(({ node: page }) => (
            <BlogpostCard
              key={page.id}
              img={page.frontmatter.featuredImage.childImageSharp.fluid}
              title={page.frontmatter.title}
              description={page.frontmatter.description}
              link={page.fields.slug}
              collections={page.frontmatter.collections}
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 530) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            collections
          }
        }
      }
    }
  }
`;
