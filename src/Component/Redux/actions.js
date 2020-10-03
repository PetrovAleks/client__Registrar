import { createAction } from "@reduxjs/toolkit";

const renderForm = createAction("RENDER_FORM");
const inputChange = createAction("INPUT_CHANGE");
const resetForm = createAction("RESET_FORM");

const requesToServer = createAction("REQUEST_SERVER");
const serverSuccess = createAction("REQUEST_SUCCESS");
const serverError = createAction("ERROR_SERVER");

const resetServerState = createAction("RESET_STATE");

const getClientList = createAction("GET_LIST");
const addNewClient = createAction("ADD_CLIENT");

export {
	renderForm,
	inputChange,
	resetForm,
	requesToServer,
	serverSuccess,
	serverError,
	resetServerState,
	getClientList,
	addNewClient,
};

// const renderForm = (value) => {
// 	return {
// 		type: "RENDER_FORM",payload:value
// 	};
// };
