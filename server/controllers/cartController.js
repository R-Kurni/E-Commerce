const Cart = require("../models/cart");
const Product = require("../models/product");

class CartController {
	static async create(req, res, next) {
		const { id } = req.user;
		const { _id, name, description, price, image } = req.body;
		try {
			const product = await Product.findByPk(_id);
			if (!product) {
				throw { name: "Product not found" };
			}
			const productId = _id.toString();
			const cart = await Cart.create({
				productId,
				name,
				description,
				quantity: 1,
				price,
				image,
				userId: id,
			});
			console.log(cart);
			if (cart.message === "Product already exist in the cart!") {
				res.status(200).json({
					message: "Product already exist in the cart!",
					_id: cart.insertedId,
					productId,
					name,
					description,
					quantity: 1,
					price,
					image,
					userId: id,
				});
			} else {
				res.status(201).json({
					message: "Successfully created!",
					_id: cart.insertedId,
					productId,
					name,
					description,
					quantity: 1,
					price,
					image,
					userId: id,
				});
			}
		} catch (error) {
			next(error);
		}
	}

	static async findAllByUser(req, res, next) {
		const { id } = req.user;
		try {
			const data = await Cart.findAllByUser(id);
			console.log(data);
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	}

	static async destroy(req, res, next) {
		try {
			const product = await Cart.findByPk(req.params.cartId);
			console.log(product);
			if (!product) {
				throw { name: "Product not found" };
			}
			const data = await Cart.destroy(req.params.cartId);
			console.log(data);
			res.status(200).json({
				message: "Successfully deleted!",
				productId: product.productId,
				_id: req.params.cartId,
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

	static async destroyAll(req, res, next) {
		const { id } = req.user;
		try {
			const cart = await Cart.findAllByUser(id);
			console.log(cart);
			if (cart.length <= 0) {
				throw { name: "Cart is empty" };
			}
			const data = await Cart.destroyAll(id);
			console.log(data);
			res.status(200).json({
				message: "Successfully deleted!",
				products: cart,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = CartController;
