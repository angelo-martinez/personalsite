import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { AboutMe } from "./views/me";
import { Resume } from "./views/resume";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={AboutMe} />
						<Route exact path="/resume" component={Resume} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default Layout;
