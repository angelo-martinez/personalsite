import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../styles/pages/collections.module.scss';

const CollectionRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  const postLinks = posts.map((post) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ));

  const collection = pageContext.collection;

  const totalCount = data.allMarkdownRemark.totalCount;

  const collectionHeader = {
    __html: `${totalCount} Post${
      totalCount === 1 ? '' : 's'
    } tagged with <span>#${collection}</span>`,
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Layout>
      <SEO title={`#${capitalize(collection)} Post`} />
      <section className="container">
        <h3
          className={styles.title}
          dangerouslySetInnerHTML={collectionHeader}
        ></h3>
        <ul className={styles.list}>{postLinks}</ul>
        <p>
          <Link to="/collections/">Browse all collections</Link>
        </p>
      </section>
    </Layout>
  );
};

export default CollectionRoute;

export const collectionPageQuery = graphql`
  query CollectionPage($collection: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { collections: { in: [$collection] } } }
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
