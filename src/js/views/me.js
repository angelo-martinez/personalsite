import React from "react";
import { Link } from "react-router-dom";

// image imports
import react from "../../img/react.png";

export const AboutMe = () => {
	return (
		<div className="about-me">
			<div className="about-me__top">
				<div className="container p-5">
					<h1 className="frontlead">Hello, world!</h1>
					<p>
						I am a Web Developer from Miami Florida. I possess good knowledge of the latest front-end
						technologies. I love spending time on fixing little details and optimizing web apps. Also I like
						working in a team, you&apos;ll learn faster and much more. As the saying goes: &apos;two heads
						are better than one&apos;.
					</p>
				</div>
			</div>
			<div className="about-me__bottom">
				<div className="container">This is my tech stack</div>
				<div className="rowp">
					<div className="colp-1-of-5">
						<img src={react} alt="React" />
						ReactJS
					</div>
					<div className="colp-1-of-5">HTML</div>
					<div className="colp-1-of-5">CSS</div>
					<div className="colp-1-of-5">CSS</div>
					<div className="colp-1-of-5">CSS</div>
				</div>
				<div className="rowp">
					<div className="colp-1-of-5">PHP</div>
					<div className="colp-1-of-5">Wordpress</div>
					<div className="colp-1-of-5">Git</div>
					<div className="colp-1-of-5">Git</div>
					<div className="colp-1-of-5">Git</div>
				</div>
				<Link to="/">
					<a href="#" className="button button--primary button--about">
						🏠 Home
					</a>
				</Link>
			</div>
		</div>
	);
};
