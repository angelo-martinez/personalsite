import React from "react";
import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

// image imports
import Javascript from "../../img/javascript.png";
import Slash from "../../img/slash.png";
import Reactimg from "../../img/react.png";
import HTML from "../../img/html5.png";
import CSS from "../../img/css3.png";
import And from "../../img/and.jpg";

export const AboutMe = () => {
	return (
		<div className="about-me">
			<div className="about-me__top">
				<h1 className="about-me__top-hello">Hello, world!</h1>
			</div>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">
					<div className="container pt-5">
						<p>
							I am a Web Developer from Miami Florida. I possess good knowledge of the latest
							web-development technologies like ReactJS, SASS, NodeJS & many more. I love helping others
							and I am currently an instructor for the TechHire Summer Boot Camp. In this role I am
							helping prepare underprivileged at-risk youth for a career as web developers by teaching
							them advanced HTML/CSS & JS through game development.
						</p>
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInRight">
				<div className="about-me__card">
					<p className="pt-3">My favorite language is:</p>
					<div className="pt-5">
						<img src={Javascript} className="lang-img" alt="Javascript" height="150" width="150" />
						<img src={Slash} className="lang-img" alt="slash" height="150" width="150" />
						<img src={Reactimg} className="lang-img" alt="ReactJS" height="150" width="150" />
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">
					<p className="pt-3">My very first languages were:</p>
					<div className="pt-5">
						<img src={HTML} className="lang-img" alt="HTML" height="150" width="150" />
						<img src={And} className="lang-img" alt="and" height="150" width="150" />
						<img src={CSS} className="lang-img" alt="CSS" height="150" width="150" />
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInRight">
				<div className="about-me__card">
					<p className="pt-3">My very first languages were:</p>
					<div className="pt-5">
						<img src={HTML} className="lang-img" alt="HTML" height="150" width="150" />
						<img src={And} className="lang-img" alt="and" height="150" width="150" />
						<img src={CSS} className="lang-img" alt="CSS" height="150" width="150" />
					</div>
				</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">Hello Ima a Leftcard</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInRight">
				<div className="about-me__card">Hello Ima a Right card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="about-me__card">Hello Ima a Left card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeInRight">
				<div className="about-me__card">Hello Ima a card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<Link to="/">
				<a href="#" className="button button--primary button--about">
					🏠 Home
				</a>
			</Link>
		</div>
	);
};
