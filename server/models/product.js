const { getDB } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");

class Product {
	static products() {
		const db = getDB();
		const productCollection = db.collection("products");
		return productCollection;
	}

	static async create({ name, description, quantity, price, image, userId }) {
		const productCollection = this.products();

		return await productCollection.insertOne({
			name,
			description,
			quantity,
			price,
			image,
			userId,
		});
	}

	static async findAll() {
		const productCollection = this.products();

		return await productCollection.find().toArray();
	}

	static async findAllByUser(id) {
		const productCollection = this.products();
		console.log(id);
		const coba = await productCollection.find({ userId: id }).toArray();
		console.log(coba);
		return coba;
	}

	static async findByPk(productId) {
		const productCollection = this.products();

		return await productCollection.findOne({
			_id: new ObjectId(productId),
		});
	}

	static async update({
		name,
		description,
		quantity,
		price,
		image,
		userId,
		productId,
	}) {
		const productCollection = this.products();
		console.log(productId);
		return await productCollection.updateOne(
			{ _id: new ObjectId(productId) },
			{
				$set: {
					name,
					description,
					quantity,
					price,
					image,
					userId,
				},
				$currentDate: { lastModified: true },
			}
		);
	}

	static async destroy(productId) {
		const productCollection = this.products();

		return await productCollection.deleteOne({
			_id: new ObjectId(productId),
		});
	}
}

module.exports = Product;
