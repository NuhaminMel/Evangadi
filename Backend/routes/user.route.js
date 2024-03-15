const auth = require("../middleware/auth");
const userController = require ("../controllers/user.controller")
const router = require("express").Router();

router.post("/create_user", userController.creatUser);
router.post("/login",  userController.login);
// router.get("/all-users", getUsers);
// router.get("/", getUsersById);

module.exports = router;
