import React from "react";
import { Link } from "react-router-dom";
//Reacstrap imports
import {
	Button,
	Container,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";

// image imports
import ReactCloset from "../../img/react-closet_opt.png";
import toDo from "../../img/to-do_opt.png";
import profile from "../../img/profile_opt.jpg";
import meetup from "../../img/meetup_opt.png";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

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
						<h1 className="header--heading-primary">Web Developer</h1>
					</div>
				</header>
				<div className="header--sub">
					<div className="header--sub--center">
						<a
							href="https://docs.google.com/document/d/16etI0mQeENXcUXcjRM8BnDYfg62afYpI7mk5GjqsfjU/edit?usp=sharing"
							className="mr-2 button button--primary button--animated--left">
							📂 Resume
						</a>
						<a
							href="https://twitter.com/Angelocodes"
							className="mr-2 button button--primary button--animated--left">
							🐦 Twitter
						</a>
						<Link to="/about">
							<a href="#" className="mr-2 button button--primary button--animated">
								👀 About Me
							</a>
						</Link>
						<a
							href="https://github.com/angelo-martinez"
							className="mr-2 button button--primary button--animated--right">
							😺 Github
						</a>
						<a href="#" className="button button--primary button--animated--right" onClick={this.toggle}>
							📱 Contact
						</a>
					</div>
				</div>
				<h1 className="frontlead mt-2 mb-4">Projects</h1>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Contact Me</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input type="email" name="email" id="email" placeholder="your@email" />
							</FormGroup>
							<FormGroup>
								<Label for="text">Text Area</Label>
								<Input type="textarea" name="text" id="text" />
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button outline color="info" onClick={this.toggle}>
							Send me an Email
						</Button>
					</ModalFooter>
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
