const initialState = {
	user: {},
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case "user/fetchSuccess":
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
}

export default userReducer;
