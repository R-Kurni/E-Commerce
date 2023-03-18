const Product = require("../models/product");

const authorization = async (req, res, next) => {
	try {
		const data = await Product.findByPk(req.params.productId);
		if (!data) {
			throw { name: "Product not found" };
		}
		console.log(data);
		if (req.user.id !== data.userId) {
			throw { name: "Forbidden" };
		}

		next();
	} catch (err) {
		next(err);
	}
};

module.exports = { authorization };
