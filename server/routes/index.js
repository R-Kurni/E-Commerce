const router = require("express").Router();
const productRouter = require("./productRoutes");

router.use("/products", productRouter);

module.exports = router;
