const router = require("express").Router();
const productController = require("../controllers/productController");
const { authorization } = require("../middlewares/authorization");

router.get("/", productController.findAllByUser);
router.get("/:productId", authorization, productController.findById);
router.post("/", productController.create);
router.put("/:productId", authorization, productController.update);
router.delete("/:productId", authorization, productController.destroy);

module.exports = router;
