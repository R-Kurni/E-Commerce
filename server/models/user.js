const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongoConnection");
const { hashPassword } = require("../helpers/bcrypt");

class User {
	static users() {
		const db = getDB();
		const userCollection = db.collection("users");
		return userCollection;
	}

	static async register({ email, password }) {
		const userCollection = this.users();

		return await userCollection.insertOne({
			email,
			password: hashPassword(password),
		});
	}

	static async findByEmail(email) {
		const userCollection = this.users();

		return await userCollection.findOne({
			email,
		});
	}

	static async login(id) {
		const userCollection = this.users();

		return await userCollection.findOne({
			_id: new ObjectId(id),
		});
	}

	// For development only
	static async findAll() {
		const userCollection = this.users();

		return await userCollection.find().toArray();
	}
}

module.exports = User;
