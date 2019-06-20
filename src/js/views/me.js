import React from "react";
import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

// image imports
import react from "../../img/react.png";

export const AboutMe = () => {
	return (
		<div className="about-me">
			<div className="about-me__top">
				<h1 className="frontlead">Hello, world!</h1>
				<p>
					I am a Web Developer from Miami Florida. I possess good knowledge of the latest front-end
					technologies. I love spending time on fixing little details and optimizing web apps. Also I like
					working in a team, you&apos;ll learn faster and much more. As the saying goes: &apos;two heads are
					better than one&apos;.
				</p>
				<Link to="/">
					<a href="#" className="button button--primary button--about">
						🏠 Home
					</a>
				</Link>
			</div>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<div className="about-me__card">Hello Ima a card</div>
			</ScrollAnimation>

			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<div className="about-me__card">Hello Ima a card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<div className="about-me__card">Hello Ima a card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<div className="about-me__card">Hello Ima a card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<div className="about-me__card">Hello Ima a card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<div className="about-me__card">Hello Ima a card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<div className="about-me__card">Hello Ima a card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
			<ScrollAnimation animateIn="fadeIn">
				<div className="about-me__card">Hello Ima a card</div>
			</ScrollAnimation>
			<div className="about-me__spacer">&nbsp;</div>
		</div>
	);
};
