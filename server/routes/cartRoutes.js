const router = require("express").Router();
const cartController = require("../controllers/cartController");

router.get("/", cartController.findAllByUser);
router.post("/", cartController.create);
router.delete("/", cartController.destroyAll);
router.delete("/:cartId", cartController.destroy);

module.exports = router;
