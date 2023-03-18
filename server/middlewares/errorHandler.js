const errorHandler = (err, req, res, next) => {
	let code = 500;
	let message = "Internal Server Error";

	if (err.name == "Product not found") {
		code = 400;
		message = "Product not found";
	} else if (err.name == "email required") {
		code = 401;
		message = "email required";
	} else if (err.name == "password required") {
		code = 401;
		message = "password required";
	} else if (err.name == "Invalid Login") {
		code = 401;
		message = "Invalid Login";
	} else if (err.name == "Invalid Token" || err.name == "JsonWebTokenError") {
		code = 401;
		message = "Invalid Token";
	} else if (err.name === "Forbidden") {
		code = 403;
		message = "Forbidden";
	}
	console.log(err);
	res.status(code).json({ message });
};

module.exports = errorHandler;
