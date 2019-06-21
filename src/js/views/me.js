import React from "react";
import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

// image imports
import Javascript from "../../img/javascript.png";
import Slash from "../../img/slash.png";
import Reactimg from "../../img/react.png";

import HTML from "../../img/html5.png";
import CSS from "../../img/css3.png";
import Ampersand from "../../img/ampersand.png";

import Github from "../../img/github.png";
import Webpack from "../../img/webpack.png";
import Wordpress from "../../img/wordpress.png";

import Bootstrap from "../../img/bootstrap.png";
import Node from "../../img/nodejs.png";
import Sass from "../../img/sass.png";

export const AboutMe = () => {
	return (
		<div className="about-me">
			<div className="about-me__top">
				<h1 className="about-me__top-hello">Hello, world!</h1>
			</div>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">
					<div className="container pt-5 about-me__card--text">
						<p>
							I am a Web Developer from Miami Florida. I possess good knowledge of the latest
							web-development technologies like ReactJS, SASS, NodeJS & many more. I love helping others
							and I am currently an instructor for the TechHire Summer Boot Camp. In this role I am
							helping prepare underprivileged at-risk youth for careers in tech by teaching them advanced
							HTML/CSS & JS through game development.
						</p>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInRight">
				<div className="about-me__card">
					<div className="about-me__card--text">
						<p className="pt-3">My favorite language is:</p>
						<div className="pt-5">
							<img src={Javascript} className="lang-img" alt="Javascript" height="150" width="150" />
							<img src={Slash} className="lang-img" alt="slash" height="150" width="150" />
							<img src={Reactimg} className="lang-img" alt="ReactJS" height="150" width="150" />
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">
					<div className="about-me__card--text">
						<p className="pt-2">My very first languages were:</p>
						<div className="pt-2">
							<img src={HTML} className="lang-img" alt="HTML" height="200" width="200" />
							<img src={Ampersand} className="lang-img" alt="and" height="200" width="200" />
							<img src={CSS} className="lang-img" alt="CSS" height="200" width="200" />
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInRight">
				<div className="about-me__card">
					<div className="about-me__card--text">
						<p className="pt-3">I have experience with:</p>
						<div className="pt-5">
							<img src={Github} className="lang-img mr-2" alt="HTML" height="150" width="150" />
							<img src={Webpack} className="lang-img mr-2" alt="CSS" height="150" width="150" />
							<img src={Wordpress} className="lang-img" alt="CSS" height="150" width="150" />
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">
					<div className="about-me__card--text">
						<p className="pt-3">And these too:</p>
						<div className="pt-5">
							<img src={Bootstrap} className="lang-img mr-2" alt="HTML" height="150" width="150" />
							<img src={Node} className="lang-img mr-2" alt="CSS" height="150" width="150" />
							<img src={Sass} className="lang-img" alt="CSS" height="150" width="150" />
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<Link to="/">
					<a href="#" className="button button--primary button--about">
						🏠 Home
					</a>
				</Link>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
		</div>
	);
};
