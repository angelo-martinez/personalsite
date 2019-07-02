import React from "react";
import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

export const AboutMe = () => {
	return (
		<div className="about-me">
			<div className="about-me__top">
				<h1 className="about-me__top-hello">Hello, world!</h1>
			</div>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">
					<div className="about-me__card--text about-me__card--text-intro">
						<p>
							I am a Web Developer from Miami Florida. I possess good knowledge of the latest
							web-development technologies like ReactJS, SASS, NodeJS, WordPress, and many more. I love
							helping others and I am currently an instructor for the TechHire Summer Boot Camp and a
							web-developer consultant for various companies in Miami. As a teacher I am helping prepare
							underprivileged at-risk youth for careers in tech by teaching them advanced HTML/CSS &
							JavaScript through game development. As a consultant I am helping businesses optimize their
							webpages to better serve their clients.
						</p>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInRight">
				<div className="about-me__card">
					<div className="about-me__card--text">
						<p className="pt-2">My favorite language is:</p>
						<div className="pt-4 about-me__card--logo">
							<i className="fab fa-js-square fa-10x mr-5" />
							<i className="fab fa-react fa-10x" />
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">
					<div className="about-me__card--text">
						<p className="pt-2">My very first languages were:</p>
						<div className="pt-4 about-me__card--logo">
							<i className="fab fa-html5 fa-10x mr-5" />
							<i className="fab fa-css3-alt fa-10x" />
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInRight">
				<div className="about-me__card">
					<div className="about-me__card--text">
						<p className="pt-2">I have experience with:</p>
						<div className="pt-4 about-me__card--logo">
							<i className="fab fa-github fa-8x mr-5" />
							<i className="fab fa-wordpress-simple fa-8x mr-5" />
							<i className="fab fa-node fa-8x mr-5" />
							<i className="fab fa-sass fa-8x" />
						</div>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">
					<div className="about-me__card--text about-me__card--text-intro">
						<p className="pt-2">A bit about myself:</p>
						<p>
							I was born in Santa Clara, Cuba and I came to the US at the age of eight full of wonder and
							excitement for my new life in America. I first lived in San Diego, California and then my
							family moved to Miami, Florida where we have remained ever since. Growing up I always had a
							deep fascination with computers and when I finally saved up enough lunch money to build my
							very first gaming PC I was instantly hooked. It was my curiosity for all things tech and my
							desire to challenge myself that convinced me to enroll in a Full-Stack coding boot camp and
							learn to code. Ever since the end of the program I have been working with various companies
							in Miami helping them improve their SEO, webpage performance, and reach more clients through
							organic growth.
						</p>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<Link to="/">
					<div className="button button--primary button--about">🏠 Home</div>
				</Link>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
		</div>
	);
};
