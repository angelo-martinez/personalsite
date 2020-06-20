import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
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
            below or read my <Link to="blog">blog</Link>
          </p>
        </article>
        <article className="project-card">
          <h2>Project 1</h2>
        </article>
        <article className="project-card">
          <h2>Project 2</h2>
        </article>
        <article className="project-card">
          <h2>Project 3</h2>
        </article>
      </div>
    </Layout>
  );
};

export default IndexPage;
