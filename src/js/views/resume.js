import React from "react";
import { Link } from "react-router-dom";

export const Resume = () => {
	return (
		<div className="Resume">
			<section className="Resume-header">
				<header>
					<h1>Angelo Martinez</h1>
					<h2>amart670@fiu.edu</h2>
				</header>
			</section>
			<section className="Resume-experience">
				<header>
					<h3>
						<u>Experience</u>
					</h3>
				</header>
				<p>
					<span className="expereince-title">
						<strong>Front-End Developer</strong>at San Services USA, 7/2019 - 2/2020
					</span>
				</p>
			</section>
			<footer>
				<Link to="/">
					<div className="button button--primary button--about">🏠 Home</div>
				</Link>
			</footer>
		</div>
	);
};
