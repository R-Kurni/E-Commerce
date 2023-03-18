const Product = require("../models/product");

class ProductController {
	static async create(req, res, next) {
		// const { id } = req.user;
		const id = "64156a97691c962699d4a7a7";
		const { name, description, quantity, price, image } = req.body;
		try {
			const data = await Product.create({
				name,
				description,
				quantity,
				price,
				image,
				userId: id,
			});
			console.log(data);
			res.status(201).json({
				message: "Successfully created!",
				_id: data.insertedId,
				name,
				description,
				quantity,
				price,
				image,
				userId: id,
			});
		} catch (error) {
			next(error);
		}
	}

	static async findAll(req, res, next) {
		try {
			const data = await Product.findAll();
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	}

	static async findById(req, res, next) {
		try {
			const data = await Product.findByPk(req.params.productId);
			if (!data) {
				throw { name: "Product not found" };
			}
			console.log(data);
			res.status(200).json(data);
		} catch (error) {
			console.log(error);
			next(error);
		}
	}

	static async update(req, res, next) {
		// const { id } = req.user;
		const id = "64156a97691c962699d4a7a7";
		const { name, description, quantity, price, image } = req.body;
		try {
			const product = await Product.findByPk(req.params.productId);
			if (!product) {
				throw { name: "Product not found" };
			}
			const data = await Product.update({
				name,
				description,
				quantity,
				price,
				image,
				userId: id,
				productId: req.params.productId,
			});
			console.log(data);
			res.status(200).json({
				message: "Successfully updated!",
				_id: req.params.productId,
				name,
				description,
				quantity,
				price,
				image,
				userId: id,
			});
		} catch (error) {
			next(error);
		}
	}

	static async destroy(req, res, next) {
		try {
			const product = await Product.findByPk(req.params.productId);
			console.log(product);
			if (!product) {
				throw { name: "Product not found" };
			}
			const data = await Product.destroy(req.params.productId);
			console.log(data);
			res.status(200).json({
				message: "Successfully deleted!",
				_id: req.params.productId,
				name: product.name,
				description: product.description,
				quantity: +product.quantity,
				price: +product.price,
				image: product.image,
				userId: product.userId,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = ProductController;
