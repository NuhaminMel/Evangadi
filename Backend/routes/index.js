const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
//Import install route
const installRouter = require("./install.route");
//Import user route
const userRouter = require("./user.route");


// Add the install router to the main router
router.use(installRouter);

// Add the user router to the main router
router.use(userRouter);

module.exports = router;
