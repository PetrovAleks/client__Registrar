import React from "react";
import { connect } from "react-redux";

import { inputChange } from "../Redux/actions";

const Gender = { MALE: "male", FEMALE: "female" };

function FieldGender(props) {
	const { inputChange, handleChange } = props;
	return (
		<div className="wrapper-input wrapper-input--flex ">
			<label className="label-gender label-radio">
				<span className="text-gender text-label">male</span>
				<input
					onChange={handleChange}
					className="input-radio"
					type="radio"
					name="gender"
					value={Gender.MALE}
					checked={Gender.MALE === inputChange.gender}
				/>
			</label>
			<label className="label-gender label-radio">
				<span className="text-gender text-label">female</span>
				<input
					onChange={handleChange}
					className="input-radio"
					type="radio"
					name="gender"
					value={Gender.FEMALE}
					checked={Gender.FEMALE === inputChange.gender}
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

export default connect(mapStateToProps, mapDispatchToProps)(FieldGender);
