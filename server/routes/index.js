const router = require("express").Router();
const productController = require("../controllers/productController");
const { authentication } = require("../middlewares/authentication");
const productRouter = require("./productRoutes");
const userRouter = require("./userRoutes");

router.get("/", productController.findAll);
router.use("/users", userRouter);
router.use(authentication);
router.use("/products", productRouter);

module.exports = router;
