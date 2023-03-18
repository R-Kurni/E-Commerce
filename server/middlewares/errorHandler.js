const errorHandler = (err, req, res, next) => {
	let code = 500;
	let message = "Internal Server Error";

	if (err.name == "Product not found") {
		code = 400;
		message = "Product not found";
	}

	res.status(code).json({ message });
};

module.exports = errorHandler;
