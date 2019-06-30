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
						<p className="pt-2">A little bit about myself:</p>
						<p>
							I was born in Santa Clara, Cuba and I came to the US at the age of eight full of wonder and
							excitement for my new life in America. I graduated with a BS from FIU in 2019. It was my
							curiosity for all things tech and my desire to challenge myself that convinced me to enroll
							in a Full-Stack boot camp and learn to code. Ever since the end of my boot camp I have been
							working to improve my skills and continuously innovate. I can’t wait to see where my career
							in tech leads, but I am glad you stopped by to check out the journey.
						</p>
						<div className="pt-4" />
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
