import React, { Component } from "react";

import { Client, clientsDataset } from "../Data";
import Card from "./input-card";
import Service from "../Service/service";

const INITIAL_STATE = {
	name: "",
	surname: "",
	loyaltyProgram: "нет",
	gender: "",
};
const LoyaltyProgram = {
	DEFAULT: "нет",
	CARD: "№",
	APP: "Мобильное приложение",
};
const Gender = { MALE: "male", FEMALE: "female" };

export default class Form extends Component {
	service = new Service();
	state = {
		serverResponse: "",
		responseText: "",
		name: "",
		surname: "",
		loyaltyProgram: "нет",
		gender: "",
	};

	componentDidMount() {
		this.displaysDataServe();
	}

	displaysDataServe = () => {
		this.service.getData().then((result) => {
			result.data.map((el) => {
				return this.setState({
					responseText: el,
				});
			});
		});
	};

	reset = () => {
		this.setState({ ...INITIAL_STATE });
	};
	renderInputCard(loyaltyProgram) {
		if (
			LoyaltyProgram.CARD === loyaltyProgram ||
			(loyaltyProgram !== LoyaltyProgram.DEFAULT &&
				loyaltyProgram !== LoyaltyProgram.APP)
		) {
			return (
				<Card
					handleChange={this.handleChange}
					loyaltyProgram={loyaltyProgram}
				/>
			);
		}
		return null;
	}

	addNewClient = (e) => {
		e.preventDefault();
		const { name, surname, gender, loyaltyProgram } = this.state;

		const newClient = new Client(
			name,
			surname,
			gender,
			loyaltyProgram,
			clientsDataset.length + 1
		);
		clientsDataset.push(newClient);
		this.reset();
		this.props.toggleRenderForm();
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { toggleRenderForm } = this.props;
		const {
			name,
			surname,
			gender,
			loyaltyProgram,

			responseText,
		} = this.state;

		return (
			<div className="wrapper-form">
				<section className="form">
					<p className="server-response">{responseText}</p>
					<button
						className="form-btn__closed"
						aria-label="closed form"
						onClick={() => toggleRenderForm()}
					>
						X
					</button>
					<form onSubmit={this.addNewClient} className="adding-form">
						<div className="wrapper-input">
							<label className="label-input">
								<span className="adding-form__name-input">Name</span>
								<input
									onChange={this.handleChange}
									type="text"
									name="name"
									value={name}
									placeholder="Enter your name"
								/>
							</label>
							<label className="label-input">
								<span className="adding-form__name-input">Surname</span>
								<input
									onChange={this.handleChange}
									type="text"
									name="surname"
									value={surname}
									placeholder="Enter your surname"
								/>
							</label>
						</div>

						<div className="wrapper-input wrapper-input--flex ">
							<label className="label-gender label-radio">
								<span className="text-gender text-label">male</span>
								<input
									onChange={this.handleChange}
									className="input-radio"
									type="radio"
									name="gender"
									value={Gender.MALE}
									checked={Gender.MALE === gender}
								/>
							</label>
							<label className="label-gender label-radio">
								<span className="text-gender text-label">female</span>
								<input
									onChange={this.handleChange}
									className="input-radio"
									type="radio"
									name="gender"
									value={Gender.FEMALE}
									checked={Gender.FEMALE === gender}
								/>
							</label>
						</div>
						<p className="bonus-text">Сhoose a bonus program</p>
						<div className="wrapper-input wrapper-input--flex" role="group">
							<label className="label-bonus label-radio">
								<span className="text-bonus text-label">Не выбран</span>
								<input
									onChange={this.handleChange}
									className="input-radio"
									type="radio"
									name="loyaltyProgram"
									value={LoyaltyProgram.DEFAULT}
									checked={LoyaltyProgram.DEFAULT === loyaltyProgram}
								/>
							</label>
							<label className="label-bonus label-radio">
								<span className="text-bonus text-label">Пластиковая карта</span>
								<input
									onChange={this.handleChange}
									className="input-radio "
									type="radio"
									name="loyaltyProgram"
									value={LoyaltyProgram.CARD}
									checked={LoyaltyProgram.CARD === loyaltyProgram}
								/>
							</label>
							{this.renderInputCard(loyaltyProgram)}

							<label className="label-bonus label-radio">
								<span className="text-bonus text-label">
									Мобильное приложение
								</span>
								<input
									onChange={this.handleChange}
									className="input-radio"
									type="radio"
									name="loyaltyProgram"
									value={LoyaltyProgram.APP}
									checked={LoyaltyProgram.APP === loyaltyProgram}
								/>
							</label>
						</div>
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
					</form>
				</section>
			</div>
		);
	}
}
