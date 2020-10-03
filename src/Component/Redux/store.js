import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import reducerRenderForm from "./reducerRenderForm";
import reducerInputChange from "./reducerInputChange";
import reducerResultServer from "./reducerResultServer";
import reducerGetClientsList from "./reducerGetClientsList";

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
	reducer: {
		renderForm: reducerRenderForm,
		inputChange: reducerInputChange,
		resultServer: reducerResultServer,
		clientsList: reducerGetClientsList,
	},
	middleware: [...defaultMiddleware],
});

export default store;
