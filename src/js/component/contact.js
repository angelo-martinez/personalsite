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
		this.name = React.createRef();
		this.email = React.createRef();
		this.message = React.createRef();
    }
    
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
            <Form
                action="https://formspree.io/martinez1751@gmail.com"
                method="POST"
                className="form">
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        ref={this.name}
                        placeholder=" Your name"
                        onChange={e =>
                            this.setState({
                                name: e.target.value
                            })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        ref={this.email}
                        placeholder="Email"
                        onChange={e =>
                            this.setState({
                                email: e.target.value
                            })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input
                        type="textarea"
                        name="message"
                        ref={this.message}
                        placeholder="Your message"
                        onChange={e =>
                            this.setState({
                                message: e.target.value
                            })
                        }
                    />
                </FormGroup>
                <div className="text-center pb-2">
                    <Button outline color="info">
                        Send me an Email
                    </Button>
                </div>
            </Form>
        );
    }
}