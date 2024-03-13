const mysql = require("mysql2/promise");
require("dotenv").config();

const dbConfig = {
  host: "localhost",
  user: "evangadiApp",
  password: "._JH(xtn3QC0y_XW",
  database: "evangadiApp",
  connectionLimit: 10,
  //   socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
};

const pool = mysql.createPool(dbConfig);

// A function that will execute SQL queries asynchronously
async function query(sql, params) {
  try {
    const [rows, fields] = await pool.execute(sql, params);
    console.log(rows);
    return rows;
  } catch (error) {
    console.error("Error executing SQL query:", error);
    throw error; // Re-throwing the error for the caller to handle
  }
}

module.exports = { query };

