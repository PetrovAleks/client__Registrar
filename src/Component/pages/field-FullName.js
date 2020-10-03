import React from "react";
import { connect } from "react-redux";

import { inputChange } from "../Redux/actions";

function FieldFullName(props) {
	const { inputChange, handleChange } = props;
	return (
		<div className="wrapper-input">
			<label className="label-input">
				<span className="adding-form__name-input">Name</span>
				<input
					onChange={handleChange}
					type="text"
					name="name"
					value={inputChange.name}
					placeholder="Enter your name"
				/>
			</label>
			<label className="label-input">
				<span className="adding-form__name-input">Surname</span>
				<input
					onChange={handleChange}
					type="text"
					name="surname"
					value={inputChange.surname}
					placeholder="Enter your surname"
				/>
			</label>
		</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FieldFullName);
