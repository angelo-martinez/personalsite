import React from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			message: ""
		};
		this.handleChangeN = this.handleChangeN.bind(this);
		this.handleChangeE = this.handleChangeE.bind(this);
		this.handleChangeM = this.handleChangeM.bind(this);
	}

	handleChangeN(event) {
		this.setState({ name: event.target.value });
	}
	handleChangeE(event) {
		this.setState({ email: event.target.value });
	}
	handleChangeM(event) {
		this.setState({ message: event.target.value });
	}

	render() {
		return (
			<Form action="https://formspree.io/amart670@gmail.com" method="POST">
				<FormGroup>
					<Label for="name">Name</Label>
					<Input type="text" name="name" placeholder=" Your name" onChange={this.handleChangeN} />
				</FormGroup>
				<FormGroup>
					<Label for="email">Email</Label>
					<Input type="email" name="email" placeholder="Email" onChange={this.handleChangeE} />
				</FormGroup>
				<FormGroup>
					<Label for="message">Message</Label>
					<Input type="textarea" name="message" placeholder="Your message" onChange={this.handleChangeM} />
				</FormGroup>
				<div className="text-center">
					<Button outline color="info" type="submit" value="Send">
						Send me an Email
					</Button>
				</div>
			</Form>
		);
	}
}
