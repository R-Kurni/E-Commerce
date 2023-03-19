import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	products: productReducer,
	carts: cartReducer,
	user: userReducer,
});

export default rootReducer;
