import { requesToServer, serverSuccess, serverError } from "./actions";

const BASE_URL = "https://meowfacts.herokuapp.com";

const getServerResponse = () => (dispatch) => {
	dispatch(requesToServer());

	fetch(BASE_URL)
		.then((response) => response.json())
		.then((response) => {
			dispatch(serverSuccess(response.data));
		})
		.catch((error) => {
			dispatch(serverError(error));
		});
};

export default getServerResponse;
