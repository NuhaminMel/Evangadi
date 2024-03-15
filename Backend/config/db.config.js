const mysql = require("mysql2/promise");
require("dotenv").config();

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB,
  connectionLimit: 10,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
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

