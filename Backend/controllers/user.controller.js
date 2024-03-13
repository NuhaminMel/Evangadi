const userService = require("../services/user.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Controller function to create a user
const creatUser = async (req, res) => {
  try {
    // Destructure required fields from request body
    const { user_name, first_name, last_name, user_email, user_password } =
      req.body;
    // Check if all required fields are provided
    if (
      !user_name ||
      !first_name ||
      !last_name ||
      !user_email ||
      !user_password
    )
      return res
        .status(400)
        .json({ msg: "please provide all required information!" });

    // Check if password meets minimum length requirement
    if (user_password.length < 8)
      return res.status(400).json({ msg: "password must be 8 characters!" });

    // Check if user already exists
    const checkIfUserEXist = await userService.checkIfUserEXist(user_email);

    if (checkIfUserEXist.length > 0) {
      return res.status(400).json({ msg: "you already have an account!" });
    }

    // Generate salt and hash password
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(user_password, salt);

    // Prepare user data to be inserted
    const formData = {
      user_name,
      first_name,
      last_name,
      user_email,
      hashedPassword,
    };

    // Call service function to create user
    const create_user = await userService.create_user(formData);

    // Check if user creation was successful
    if (create_user) {
      return res
        .status(200)
        .json({ status: true, msg: " User Created successfuly!" });
    } else {
      return res.status(400).json({ msg: " something went wrong!" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { creatUser };
