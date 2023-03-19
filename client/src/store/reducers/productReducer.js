const initialState = {
	products: [],
};

function productReducer(state = initialState, action) {
	switch (action.type) {
		case "products/fetchSuccess":
			return {
				...state,
				products: action.payload,
			};
		case "userProducts/fetchSuccess":
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
}

export default productReducer;
