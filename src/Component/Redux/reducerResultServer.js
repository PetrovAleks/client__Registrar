const error = "Ошибка Сервера";
const initState = "";

const reducerResultServer = (state = initState, action) => {
	switch (action.type) {
		case "REQUEST_SUCCESS":
			return state + action.payload;

		case "ERROR_SERVER":
			return error;

		case "RESET_STATE":
			return (state = initState);

		default:
			return state;
	}
};

export default reducerResultServer;
