const { getDB } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");

class Cart {
	static carts() {
		const db = getDB();
		const cartCollection = db.collection("carts");
		return cartCollection;
	}

	static async create({
		productId,
		name,
		description,
		quantity,
		price,
		image,
		userId,
	}) {
		const cartCollection = this.carts();

		const product = await cartCollection.findOne({
			productId,
		});

		if (!product) {
			const data = await cartCollection.insertOne({
				productId,
				name,
				description,
				quantity,
				price,
				image,
				userId,
			});
			return { data, message: "Successfully created!" };
		} else {
			return { product, message: "Product already exist in the cart!" };
		}
	}

	static async findAllByUser(id) {
		const cartCollection = this.carts();
		return await cartCollection.find({ userId: id }).toArray();
	}

	static async findByPk(cartId) {
		const cartCollection = this.carts();

		return await cartCollection.findOne({
			_id: new ObjectId(cartId),
		});
	}

	static async destroy(cartId) {
		const cartCollection = this.carts();

		return await cartCollection.deleteOne({
			_id: new ObjectId(cartId),
		});
	}

	static async destroyAll(id) {
		const cartCollection = this.carts();

		return await cartCollection.deleteMany({
			userId: id,
		});
	}
}

module.exports = Cart;
