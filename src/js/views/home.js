import React from "react";
//Reacstrap imports
import {
	Button,
	Card,
	CardTitle,
	CardText,
	CardImg,
	CardBody,
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
import ReactCloset from "../../img/react-closet.png";
import toDo from "../../img/to-do.png";
import profile from "../../img/profile.jpg";
import meetup from "../../img/meetup.png";

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
						<h1 className="header--heading-primary">Front-End Dev</h1>
					</div>
				</header>
				<div className="header--sub">
					<div className="header--sub--center">
						<a
							href="https://docs.google.com/document/d/16etI0mQeENXcUXcjRM8BnDYfg62afYpI7mk5GjqsfjU/edit?usp=sharing"
							className="mr-2 button button--primary button--animated">
							<i className="far fa-file mr-1" />
							Resume
						</a>
						<a
							href="https://twitter.com/Angelocodes"
							className="mr-2 button button--primary button--animated">
							<i className="fab fa-twitter mr-1" />
							Twitter
						</a>
						<a href="#" className="mr-2 button button--primary button--animated">
							Center Button
						</a>
						<a
							href="https://github.com/angelo-martinez"
							className="mr-2 button button--primary button--animated">
							<i className="fab fa-github mr-1" />
							Github
						</a>
						<a href="#" className="button button--primary button--animated" onClick={this.toggle}>
							<i className="fas fa-phone mr-1" />
							Contact
						</a>
					</div>
				</div>
				<h1 className="frontlead mt-2 mb-5">Projects</h1>
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
							<Card>
								<CardImg top width="100%" src={toDo} alt="Todo App Thumbnail" />
								<CardBody>
									<CardTitle>Todo App</CardTitle>
									<CardText>
										React.JS | HTML | CSS | ReacStrap | Node.Js | Worpress | ACF | PHP
									</CardText>
									<Button
										outline
										href="https://github.com/angelo-martinez/todoapp"
										color="info"
										className="mr-1">
										Github Repo
									</Button>
									<Button outline color="info">
										Live Demo
									</Button>
								</CardBody>
							</Card>
						</div>
						<div className="colp-1-of-3">
							<Card>
								<CardImg top width="100%" src={ReactCloset} alt="React Closet Thumbnail" />
								<CardBody>
									<CardTitle>React Closet</CardTitle>
									<CardText>
										React.JS | HTML | CSS | ReacStrap | Node.Js | Worpress | ACF | PHP
									</CardText>
									<Button
										outline
										color="info"
										href="https://github.com/amart31/final-project-frontend"
										className="mr-1">
										Github Repo
									</Button>
									<Button outline color="info">
										Live Demo
									</Button>
								</CardBody>
							</Card>
						</div>
						<div className="colp-1-of-3">
							<Card>
								<CardImg top width="100%" src={meetup} alt="Meetup Clone Thumbnail" />
								<CardBody>
									<CardTitle>Meetup Clone</CardTitle>
									<CardText>
										React.JS | HTML | CSS | ReacStrap | Node.Js | Worpress | ACF | PHP
									</CardText>
									<Button outline color="info" className="mr-1">
										Github Repo
									</Button>
									<Button outline color="info">
										Live Demo
									</Button>
								</CardBody>
							</Card>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}
