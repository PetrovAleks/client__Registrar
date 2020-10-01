import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Header from "../header";

import { About, Home, Form } from "../pages";

export default class App extends Component {
	state = {
		renderForm: false,
	};

	toggleRenderForm = () => {
		this.setState({
			renderForm: !this.state.renderForm,
		});
	};

	render() {
		return (
			<>
				<BrowserRouter>
					{this.state.renderForm ? (
						<Form toggleRenderForm={this.toggleRenderForm} />
					) : null}
					<Header />
					<Switch>
						<Route
							path="/home"
							component={() => (
								<Home toggleRenderForm={this.toggleRenderForm} />
							)}
						/>
						<Route path="/about" component={About} />
						<Redirect to="/home" />
					</Switch>
				</BrowserRouter>
			</>
		);
	}
}
