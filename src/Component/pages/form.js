import React, { Component } from "react";
import { connect } from "react-redux";

import { Client } from "../Data";

import FieldFullName from "./field-FullName";
import FieldGender from "./field-gender";
import FieldLoyaltyProgram from "./field-loyaltyProgram";

import {
	renderForm,
	resetForm,
	resetServerState,
	addNewClient,
} from "../Redux/actions";
import getServerResponse from "../Redux/operations";

class Form extends Component {
	componentDidMount() {
		this.props.getServerResponse();
	}
	componentWillUnmount() {
		const { resetServerState } = this.props;

		resetServerState();
	}

	onAddNewClient = (e) => {
		e.preventDefault();
		const {
			renderForm,
			inputChange,
			addNewClient,
			clientsList,
			resetForm,
		} = this.props;
		const { name, surname, gender, loyaltyProgram } = inputChange;

		const newClient = new Client(
			name,
			surname,
			gender,
			loyaltyProgram,
			clientsList.length + 1
		);
		addNewClient(newClient);
		resetForm();
		renderForm();
	};

	render() {
		const { renderForm, inputChange, resultServer } = this.props;
		const { name, surname, gender, loyaltyProgram } = inputChange;

		return (
			<div className="wrapper-form">
				<section className="form">
					<button
						className="form-btn__closed"
						aria-label="closed form"
						onClick={renderForm}
					>
						X
					</button>
					<form onSubmit={this.onAddNewClient} className="adding-form">
						<FieldFullName />
						<FieldGender />
						<p className="bonus-text">Сhoose a bonus program</p>
						<FieldLoyaltyProgram />
						<button
							className="form-btn__add"
							aria-label="add a client"
							type="submit"
							disabled={
								!name || !surname || !gender || !loyaltyProgram ? true : false
							}
						>
							Add
						</button>
						<p className="server-response">{resultServer}</p>
					</form>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		inputChange: state.inputChange,
		resultServer: state.resultServer,
		clientsList: state.clientsList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		renderForm: () => dispatch(renderForm()),
		resetForm: () => dispatch(resetForm()),
		getServerResponse: () => dispatch(getServerResponse()),
		resetServerState: () => dispatch(resetServerState()),
		addNewClient: (newClient) => dispatch(addNewClient(newClient)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
