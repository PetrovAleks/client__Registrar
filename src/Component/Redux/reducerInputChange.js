const inputName = {
	name: "",
	surname: "",
	loyaltyProgram: "нет",
	gender: "",
};

const reducerInputChange = (state = inputName, action) => {
	switch (action.type) {
		case "INPUT_CHANGE":
			return { ...state, ...action.payload };

		case "RESET_FORM":
			return inputName;

		default:
			return state;
	}
};

export default reducerInputChange;
