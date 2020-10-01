import React from "react";

function Card(props) {
	const { loyaltyProgram, handleChange } = props;
	return (
		<label className="label-input">
			<input
				onChange={handleChange}
				type="number"
				name="loyaltyProgram"
				placeholder="enter your card number"
				value={loyaltyProgram}
			/>
		</label>
	);
}

export default Card;
