import axios from "axios";

export const register = (formRegister) => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:3000/users/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formRegister),
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchUserSuccess = (data) => {
	return {
		type: "user/fetchSuccess",
		payload: data,
	};
};

export const login = (formLogin) => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:3000/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formLogin),
			});
			const data = await res.json();
			if (data.access_token) {
				localStorage.setItem("access_token", data.access_token);
			}
			dispatch(fetchUserSuccess(data));
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

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

export const fetchUserProductsSuccess = (data) => {
	return {
		type: "userProducts/fetchSuccess",
		payload: data,
	};
};

export const fetchUserProducts = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `http://localhost:3000/products`,
				headers: {
					access_token: localStorage.access_token,
				},
			});
			dispatch(fetchUserProductsSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const createProduct = (formProduct) => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:3000/products", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.access_token,
				},
				body: JSON.stringify(formProduct),
			});
			const data = await res.json();
			await dispatch(fetchUserProducts());
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateProduct = ({ formProduct, id }) => {
	return async (dispatch) => {
		try {
			const res = await fetch(`http://localhost:3000/products/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.access_token,
				},
				body: JSON.stringify(formProduct),
			});
			const data = await res.json();
			await dispatch(fetchUserProducts());
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteProduct = (id) => {
	return async (dispatch) => {
		try {
			const res = await fetch(`http://localhost:3000/products/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.access_token,
				},
			});
			const data = await res.json();
			await dispatch(fetchUserProducts());
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchCartsSuccess = (data) => {
	return {
		type: "carts/fetchSuccess",
		payload: data,
	};
};

export const fetchCarts = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `http://localhost:3000/carts`,
				headers: {
					access_token: localStorage.access_token,
				},
			});
			dispatch(fetchCartsSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const addToCart = ({ product }) => {
	return async () => {
		try {
			const res = await fetch("http://localhost:3000/carts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.access_token,
				},
				body: JSON.stringify(product),
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteCart = (id) => {
	return async (dispatch) => {
		try {
			const res = await fetch(`http://localhost:3000/carts/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.access_token,
				},
			});
			const data = await res.json();
			await dispatch(fetchCarts());
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const destroyCart = () => {
	return async () => {
		try {
			const res = await fetch(`http://localhost:3000/carts`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.access_token,
				},
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};
