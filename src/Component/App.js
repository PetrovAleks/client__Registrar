import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./header";
import { About, Home, Form } from "./pages";

const App = ({ renderValue }) => {
	return (
		<>
			<BrowserRouter>
				{renderValue ? <Form /> : null}
				<Header />
				<Switch>
					<Route path="/home" component={() => <Home />} />
					<Route path="/about" component={About} />
					<Redirect to="/home" />
				</Switch>
			</BrowserRouter>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		renderValue: state.renderForm,
	};
};

export default connect(mapStateToProps)(App);
