import clientsDataset from "../Data/clients-dataset";

const reducerGetClientsList = (state = [], action) => {
	switch (action.type) {
		case "GET_LIST":
			return [...action.payload];

		case "ADD_CLIENT":
			clientsDataset.push(action.payload);
			return clientsDataset;

		default:
			return state;
	}
};

export default reducerGetClientsList;
