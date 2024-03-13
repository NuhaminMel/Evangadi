const dbConfig = require("../config/db.config");

// check if user exist
const checkIfUserEXist = async (user_email) => {
  try {
    const query = "SELECT * FROM registration WHERE user_email = ? ";
    const rows = await dbConfig.query(query, [user_email]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

// create a function to create a user
// create a function to create a user
const create_user = async (formData) => {
  try {
    // Destructure formData object to get required values
    const { user_name, first_name, last_name, user_email, hashedPassword } =
      formData;

    // Construct the SQL query with placeholders (?) to insert data to registration table
    const query1 =
      "INSERT INTO registration (user_name, user_email, user_password) VALUES (?, ?, ?)";

    // Execute the query asynchronously using the query function
    const rows1 = await dbConfig.query(query1, [
      user_name,
      user_email,
      hashedPassword,
    ]);

    // Check if insertion was successful
    if (rows1.affectedRows !== 1) {
      console.error("Failed to insert data into the 'registration' table.");
      return false; // Return false if insertion failed
    }
    // get inserted Id
     const user_id = rows1.insertId
    // Construct the SQL query with placeholders (?) to insert data to profile table
    const query2 = "INSERT INTO profile (user_id,first_name, last_name) VALUES (?, ?,?)";

    // Execute the query asynchronously using the query function 
    const rows2 = await dbConfig.query(query2, [user_id,first_name, last_name]);

    // Check if insertion was successful
    if (rows2.affectedRows !== 1) {
      console.error("Failed to insert data into the 'registration' table.");
      return false; // Return false if insertion failed
    }

    // Both insertions were successful
    console.log("Data inserted successfully into both tables.");
    return true;
  } catch (error) {
    console.error("Error occurred while inserting data:", error);
    // Handle the error here, if needed
    return false; // Return false if an error occurred during insertion
  }
};

module.exports = { checkIfUserEXist, create_user };
