const initialState = {
	carts: [],
};

function cartReducer(state = initialState, action) {
	switch (action.type) {
		case "carts/fetchSuccess":
			return {
				...state,
				carts: action.payload,
			};
		default:
			return state;
	}
}

export default cartReducer;
