import React from 'react';
import { kebabCase } from 'lodash';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const CollectionsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="Collections" />
    <div className="container content">
      <div className="columns">
        <div
          className="column is-10 is-offset-1"
          style={{ marginBottom: '6rem' }}
        >
          <h1 className="title is-size-2 is-bold-light">Collections</h1>
          <ul className="collectionslist">
            {group.map((collection) => (
              <li key={collection.fieldValue}>
                <Link to={`/collections/${kebabCase(collection.fieldValue)}/`}>
                  {collection.fieldValue} ({collection.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default CollectionsPage;

export const collectionsPageQuery = graphql`
  query CollectionsQuery {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___collections) {
        fieldValue
        totalCount
      }
    }
  }
`;
