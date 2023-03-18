const User = require("../models/user");
const { comparePassword } = require("../helpers/bcrypt");
const { encodeToken } = require("../helpers/jwt");

class UserController {
	static async register(req, res, next) {
		const { email, password } = req.body;
		try {
			const data = await User.register({
				email,
				password,
			});
			console.log(data);
			res.status(201).json({
				_id: data.insertedId,
				email,
			});
		} catch (error) {
			next(error);
		}
	}

	static async login(req, res, next) {
		const { email, password } = req.body;
		try {
			if (!email) {
				throw { name: "email required" };
			}
			if (!password) {
				throw { name: "password required" };
			}
			const user = await User.findByEmail(email);
			const id = user._id.toString();
			if (!user) {
				throw { name: "Invalid Login" };
			}
			if (!comparePassword(password, user.password)) {
				throw { name: "Invalid Login" };
			}
			const payload = {
				id,
			};
			const access_token = encodeToken(payload);
			console.log(access_token);
			res.status(200).json({
				access_token,
			});
		} catch (error) {
			console.log(error);
			next(error);
		}
	}

	// For development only
	static async findAll(req, res, next) {
		try {
			const data = await User.findAll();
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = UserController;
