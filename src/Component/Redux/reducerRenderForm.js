const reducerRenderForm = (state = false, action) => {
	switch (action.type) {
		case "RENDER_FORM":
			return !state;

		default:
			return state;
	}
};

export default reducerRenderForm;
