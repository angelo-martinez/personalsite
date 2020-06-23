import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import styles from '../styles/pages/index.module.scss';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <article className="intro">
          <h2>Hello World! welcome to my little corner of the internet.</h2>
          <p>
            I am a front end developer with a passion for all things javascript.
            I have experience with ReactJs, GatsbyJs, Wordpress/PHP, and
            JamStack architecture.
          </p>
          <p>
            On my spare time I like to write in the hopes that people struggling
            with the same issues as me have an easier time getting to the
            solution.
          </p>
          <p>
            Please feel free to check out some of my favorite side projects
            below or read my <Link to="/blog">blog</Link>
          </p>
        </article>
        <section className={styles.grid}>
          <Card
            img={data.meetupImg.childImageSharp.fluid}
            name="Meetup Clone"
            stack="stack | stack | stack"
            link="https://github.com/angelo-martinez/meetup-react"
          />
          <Card
            img={data.todoImg.childImageSharp.fluid}
            name="To-do App"
            stack="stack | stack | stack"
            link="https://github.com/angelo-martinez/todoapp"
          />
          <Card
            img={data.reactImg.childImageSharp.fluid}
            name="Meetup Clone"
            stack="stack | stack | stack"
            link="https://github.com/amart31/final-project-frontend"
          />
          <Card
            img={data.reactImg.childImageSharp.fluid}
            name="MSR"
            stack="stack | stack | stack"
            link="https://github.com/angelo-martinez/todoapp"
          />
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    meetupImg: file(relativePath: { eq: "meetup_opt.png" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    todoImg: file(relativePath: { eq: "to-do_opt.png" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    reactImg: file(relativePath: { eq: "react-closet_opt.png" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
