import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import LoginRegister from "../views/LoginRegister.jsx";
import HomePage from "../views/HomePage.jsx";
import NotFoundPage from "../views/NotFoundPage.jsx";
import CartPage from "../views/CartPage.jsx";
import StorePage from "../views/StorePage.jsx";

const loginRequiredLoader = () => {
	if (!localStorage.access_token) {
		return redirect("/login");
	}
	return null;
};

const logoutRequiredLoader = () => {
	if (localStorage.access_token) {
		return redirect("/");
	}
	return null;
};

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
			{
				path: "/login",
				loader: logoutRequiredLoader,
				element: <LoginRegister />,
			},
			{
				path: "/cart",
				loader: loginRequiredLoader,
				element: <CartPage />,
			},
			{
				path: "/store",
				loader: loginRequiredLoader,
				element: <StorePage />,
			},
		],
	},
]);

export default router;
