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

// check if database is connected
// pool.getConnection(function (err, connection) {
//     if (err) throw err
//   console.log("Database connected!");
// });
const pool = mysql.createPool(dbConfig)
// a function that will execute SQL queries asynchronusly
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  console.log(rows)
}

module.exports = { query };
