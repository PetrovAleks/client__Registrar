import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./Component/App";
import store from "./Component/Redux/store";
import "./Component/styles/main.scss";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
