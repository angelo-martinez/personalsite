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
							I am a front end developer from Miami, Florida. I possess good knowledge of the latest
							web-development technologies like ReactJS, vanilla Javascript, NodeJS, HTML5, CSS, SASS and
							many more. Currently I am a front end developer at San Services USA, a subsidary of Sandals
							Resorts.
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
			<ScrollAnimation animateIn="fadeIn">
				<Link to="/">
					<div className="button button--primary button--about">🏠 Home</div>
				</Link>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
		</div>
	);
};
