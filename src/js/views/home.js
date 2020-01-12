import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//Reacstrap imports
import { Form, FormGroup, Input, Button, Label, Container, Modal, ModalHeader, ModalBody } from "reactstrap";

// image import
import profile from "../../img/profile_opt.jpg";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			name: "",
			email: "",
			message: ""
		};

		this.toggle = this.toggle.bind(this);
	}

	handleForm = e => {
		axios
			.post("https://formcarry.com/s/LB3KICYPEUw", this.state, {
				headers: { Accept: "application/json" }
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});

		e.preventDefault();
	};

	handleFields = e => this.setState({ [e.target.name]: e.target.value });

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}
	render() {
		return (
			<div className="text-center">
				<header className="header">
					<div className="header--top">
						<img src={profile} className="header--profileimg" />
						<span className="header--name">Angelo Martinez</span>
					</div>
					<div className="header--textbox">
						<h1 className="header--heading-primary">Front-End Developer</h1>
					</div>
				</header>
				<div className="header--sub">
					<div className="header--sub--center">
						<a
							href="https://docs.google.com/document/d/1CZwiZ9IZyXYneoIthMydqQ8qoLFs9z26fbEdAc8qq7Y/edit?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4 button button--primary button--animated--left">
							📂 Resume
						</a>
						<a
							href="https://linkedin.com/in/angelo-martinez/"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4 button button--primary button--animated--left">
							👨🏽‍💼 Linkedin
						</a>
						<Link to="/about">
							<div className="mr-4 button button--primary button--animated">👀 About Me</div>
						</Link>
						<a
							href="https://github.com/angelo-martinez"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-4 button button--primary button--animated--right">
							😺 Github
						</a>
						<div className="button button--primary button--animated--right" onClick={this.toggle}>
							📱 Contact
						</div>
					</div>
				</div>
				<h1 className="frontlead mt-2 mb-4">Projects</h1>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Contact Me</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleForm}>
							<FormGroup>
								<Label for="name">Name</Label>
								<Input
									type="text"
									id="name"
									name="name"
									placeholder="Your name"
									onChange={this.handleFields}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									onChange={this.handleFields}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="message">Message</Label>
								<Input
									type="textarea"
									id="message"
									name="message"
									placeholder="Your message"
									onChange={this.handleFields}
								/>
							</FormGroup>
							<div className="text-center">
								<Button outline color="info" type="submit" onClick={this.toggle}>
									Send me an Email
								</Button>
							</div>
							<Input type="hidden" name="_gotcha" />
						</Form>
					</ModalBody>
				</Modal>
				<Container fluid className="mb-4">
					<div className="rowp">
						<div className="colp-1-of-3">
							<div className="cardp">
								<div className="cardp--side cardp--side--front">
									<div className="cardp--picture cardp--picture-1">&nbsp;</div>
									<h4 className="cardp--heading">To-Do App</h4>
									<div className="cardp--details">
										<ul>
											<li>React.JS</li>
											<li>HTML</li>
											<li>CSS</li>
											<li>Node.Js</li>
											<li>Git</li>
										</ul>
									</div>
								</div>
								<div className="cardp--side cardp--side--back">
									<div className="cardp__cta">
										<a
											href="https://github.com/angelo-martinez/todoapp"
											target="_blank"
											rel="noopener noreferrer"
											className="button button--primary">
											😺 Repo
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="colp-1-of-3">
							<div className="cardp">
								<div className="cardp--side cardp--side--front">
									<div className="cardp--picture cardp--picture-2">&nbsp;</div>
									<h4 className="cardp--heading">React-Closet</h4>
									<div className="cardp--details">
										<ul>
											<li>React.JS</li>
											<li>HTML</li>
											<li>CSS</li>
											<li>Node.Js</li>
											<li>Worpress</li>
										</ul>
									</div>
								</div>
								<div className="cardp--side cardp--side--back">
									<div className="cardp__cta">
										<a
											href="https://github.com/amart31/final-project-frontend"
											target="_blank"
											rel="noopener noreferrer"
											className="button button--primary">
											😺 Repo
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="colp-1-of-3">
							<div className="cardp">
								<div className="cardp--side cardp--side--front">
									<div className="cardp--picture cardp--picture-3">&nbsp;</div>
									<h4 className="cardp--heading">Meetup Clone</h4>
									<div className="cardp--details">
										<ul>
											<li>React.JS</li>
											<li>HTML</li>
											<li>CSS</li>
											<li>Node.Js</li>
											<li>Git</li>
										</ul>
									</div>
								</div>
								<div className="cardp--side cardp--side--back">
									<div className="cardp__cta">
										<a
											href="https://github.com/angelo-martinez/meetup-react"
											target="_blank"
											rel="noopener noreferrer"
											className="button button--primary">
											😺 Repo
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}
