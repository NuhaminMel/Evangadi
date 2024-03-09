const express = require("express");

const router = express.Router();
// import install function from install controller
const installController = require("../controllers/install.controller");

// Create a route to handle the install request on get
router.get("/install", installController.install);

module.exports = router;
