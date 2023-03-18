const express = require("express");
const cors = require("cors");
const app = express();
const { mongoConnect } = require("./config/mongoConnection");
const port = process.env.PORT || 3000;
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use(routes);
app.use(errorHandler);

mongoConnect()
	.then((db) => {
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
