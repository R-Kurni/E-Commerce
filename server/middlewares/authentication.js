const { decodeToken } = require("../helpers/jwt");
const User = require("../models/user");

const authentication = async (req, res, next) => {
	try {
		const { access_token } = req.headers;
		if (!access_token) {
			throw { name: "Invalid Token" };
		}

		const payload = decodeToken(access_token);
		if (!payload) {
			throw { name: "Invalid Token" };
		}

		const user = await User.login(payload.id);
		if (!user) {
			throw { name: "Invalid Token" };
		}

		req.user = {
			id: payload.id,
		};

		next();
	} catch (err) {
		next(err);
	}
};

module.exports = { authentication };
