import React from "react";
import { connect } from "react-redux";

import { inputChange } from "../Redux/actions";

function FialdCard(props) {
	const { inputChange, handleChange } = props;
	return (
		<label className="label-input">
			<input
				onChange={handleChange}
				type="number"
				name="loyaltyProgram"
				placeholder="enter your card number"
				value={inputChange.loyaltyProgram}
			/>
		</label>
	);
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
export default connect(mapStateToProps, mapDispatchToProps)(FialdCard);
