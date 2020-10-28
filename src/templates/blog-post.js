import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Content, { HTMLContent } from '../components/content';
import styles from '../styles/pages/post.module.scss';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  collections,
  title,
  seo,
  headerImage,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {seo || ''}
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        <Img fluid={headerImage} className={styles.img} />
        <PostContent content={content} className={styles.content} />
        {collections && collections.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Tags:</h4>
            <ul className={styles.tags}>
              {collections.map((collection) => (
                <li key={collection + `collection`}>
                  <Link to={`/collections/${kebabCase(collection)}/`}>
                    #{collection}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        seo={
          <SEO
            title={`${post.frontmatter.title}`}
            description={`${post.frontmatter.description}`}
          />
        }
        collections={post.frontmatter.collections}
        title={post.frontmatter.title}
        headerImage={post.frontmatter.headerImage.childImageSharp.fluid}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        collections
        headerImage {
          childImageSharp {
            fluid(maxWidth: 530) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
