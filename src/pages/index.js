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
        <article className={styles.intro}>
          <h2 className={styles.lead}>
            Hello World! Welcome to my little corner of the internet.
          </h2>
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
            below or read my <Link to="/blog">blog</Link>.
          </p>
        </article>
        <section className={styles.grid}>
          <Card
            img={data.msrImg.childImageSharp.fluid}
            name="My Surgery Recovery.com"
            stack="GatsbyJs | CSS Modules"
            link="https://mysurgeryrecovery.com/"
            live={true}
          />
          <Card
            img={data.todoImg.childImageSharp.fluid}
            name="To-do App"
            stack="ReactJs | SCSS"
            link="https://github.com/angelo-martinez/todoapp"
          />
          <Card
            img={data.spaceImg.childImageSharp.fluid}
            name="Space Invaders"
            stack="vanillaJS | HTML | CSS"
            link="https://github.com/angelo-martinez/space-invaders"
          />
          <Card
            img={data.spaceImg.childImageSharp.fluid}
            name="Meetup Clone"
            stack="ReactJs | CSS"
            link="https://github.com/angelo-martinez/meetup-react"
          />
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    msrImg: file(relativePath: { eq: "msr.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    todoImg: file(relativePath: { eq: "todo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    spaceImg: file(relativePath: { eq: "space-invaders.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 620, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
