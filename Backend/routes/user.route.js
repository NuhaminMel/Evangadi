const auth = require("../middleware/auth");
const {
  createUser,
  login,
  getUsersById,
  getUsers,
} = require("../controllers/user.controller");
const router = require("express").Router();

router.post("/login", createUser);
router.post("/login", auth, login);
router.get("/all-users", getUsers);
router.get("/", auth, getUsersById);

module.exports = router;
