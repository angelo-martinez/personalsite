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
	Row,
	Col,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
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
			<div>
				<header className="header">
					<div className="top">
						<img src={profile} className="profileimg" />
						<span className="name">Angelo Martinez</span>
					</div>
					<div className="textbox">
						<h1 className="heading-primary">{"<ReactJS Dev />"}</h1>
					</div>
				</header>
				<div style={{ textAlign: "center" }} className="mt-3">
					<div style={{ display: "inline-block" }} className="mb-1">
						<Button outline href="https://www.w3schools.com" color="info" className="mr-2">
							<i className="far fa-file mr-1" />
							Resume
						</Button>{" "}
						<Button outline href="https://twitter.com/Angelocodes" color="info" className="mr-2">
							<i className="fab fa-twitter mr-1" />
							Twitter
						</Button>{" "}
						<Button outline href="https://github.com/angelo-martinez" color="info" className="mr-2">
							<i className="fab fa-github mr-1" />
							Github
						</Button>{" "}
						<Button outline color="info" className="mr-2" onClick={this.toggle}>
							<i className="fas fa-phone mr-1" />
							Contact
						</Button>{" "}
					</div>
					<h1 className="frontlead mt-2 mb-5"> {"<Projects />"} </h1>
				</div>
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
				<Container className="mb-2">
					<Row>
						<Col>
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
						</Col>
						<Col>
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
						</Col>
						<Col>
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
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
