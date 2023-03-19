export const fetchProductsSuccess = (data) => {
	return {
		type: "products/fetchSuccess",
		payload: data,
	};
};

export const fetchProducts = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `http://localhost:3000/`,
			});
			dispatch(fetchProductsSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};
