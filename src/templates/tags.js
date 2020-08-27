import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../styles/pages/tags.module.scss';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = {
      __html: `${totalCount} Post${
        totalCount === 1 ? '' : 's'
      } tagged with <span>#${tag}</span>`,
    };

    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
      <Layout>
        <SEO title={`${capitalize(tag)} Collection`} />
        <section className="container">
          <h3 className={styles.title} dangerouslySetInnerHTML={tagHeader}></h3>
          <ul className={styles.list}>{postLinks}</ul>
          <p>
            <Link to="/tags/">Browse all tags</Link>
          </p>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
