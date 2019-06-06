import React from "react";
import { Link } from "react-router-dom";

export const AboutMe = () => {
	return (
		<div className="about-me">
			<div className="about-me__top">
				<div className="container p-5">
					<h1 className="display-3">Hello, world!</h1>
					<p className="lead">
						I am a Web Developer from Miami Florida. I possess good knowledge of the latest front-end
						technologies. I love good code structure and order and I also stand for quality. I love spending
						time on fixing little details and optimizing web apps. Also I like working in a team,
						you&apos;ll learn faster and much more. As the saying goes: &apos;two heads are better than
						one&apos;.
					</p>
					<hr className="my-2" />
					<p>
						It uses utility classes for typography and spacing to space content out within the larger
						container.
					</p>
				</div>
			</div>
			<div className="about-me__bottom">
				<div className="container">This is my tech stack</div>
				<div className="rowp">
					<div className="colp-1-of-3">ReactJS</div>
					<div className="colp-1-of-3">HTML</div>
					<div className="colp-1-of-3">CSS</div>
				</div>
				<div className="rowp">
					<div className="colp-1-of-3">PHP</div>
					<div className="colp-1-of-3">Wordpress</div>
					<div className="colp-1-of-3">Git</div>
				</div>
			</div>
			<div className="about-me__footer">
				<Link to="/">
					<a href="#" className="mr-2 button button--primary button--animated">
						🏠 Home
					</a>
				</Link>
			</div>
		</div>
	);
};
