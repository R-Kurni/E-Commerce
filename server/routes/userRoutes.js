const router = require("express").Router();
const userController = require("../controllers/userController");

// For development only
router.get("/", userController.findAll);

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
