import React, { Component } from "react";
import { connect } from "react-redux";

import FialdCard from "./fiald-card";

import { inputChange } from "../Redux/actions";

const LoyaltyProgram = {
	DEFAULT: "нет",
	CARD: "№",
	APP: "Мобильное приложение",
};

class FieldLoyaltyProgram extends Component {
	renderInputCard() {
		const {
			inputChange: { loyaltyProgram },
		} = this.props;
		if (
			LoyaltyProgram.CARD === loyaltyProgram ||
			(loyaltyProgram !== LoyaltyProgram.DEFAULT &&
				loyaltyProgram !== LoyaltyProgram.APP)
		) {
			return <FialdCard />;
		}
		return null;
	}

	render() {
		const { inputChange, handleChange } = this.props;
		return (
			<div className="wrapper-input wrapper-input--flex" role="group">
				<label className="label-bonus label-radio">
					<span className="text-bonus text-label">Не выбран</span>
					<input
						onChange={handleChange}
						className="input-radio"
						type="radio"
						name="loyaltyProgram"
						value={LoyaltyProgram.DEFAULT}
						checked={LoyaltyProgram.DEFAULT === inputChange.loyaltyProgram}
					/>
				</label>
				<label className="label-bonus label-radio">
					<span className="text-bonus text-label">Пластиковая карта</span>
					<input
						onChange={handleChange}
						className="input-radio "
						type="radio"
						name="loyaltyProgram"
						value={LoyaltyProgram.CARD}
						checked={LoyaltyProgram.CARD === inputChange.loyaltyProgram}
					/>
				</label>
				{this.renderInputCard()}

				<label className="label-bonus label-radio">
					<span className="text-bonus text-label">Мобильное приложение</span>
					<input
						onChange={handleChange}
						className="input-radio"
						type="radio"
						name="loyaltyProgram"
						value={LoyaltyProgram.APP}
						checked={LoyaltyProgram.APP === inputChange.loyaltyProgram}
					/>
				</label>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		inputChange: state.inputChange,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: (e) => {
			const { name, value } = e.target;
			return dispatch(inputChange({ [name]: value }));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FieldLoyaltyProgram);
