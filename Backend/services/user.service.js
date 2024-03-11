const dbConfig = require("../config/db.config");

module.exports = {
  register: (data, callback) => {
    dbConfig.query(
      `INSERT INTO registration(user_name, user_email, user_password) VALUES (?, ?, ?)`,
      [data.userName, data.email, data.password],
      // console.log([data.userName, data.email, data.password]),
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },

  profile: (data, callback) => {
    dbConfig.query(
      `INSERT INTO profile(user_id, first_name, last_name) VALUES (?, ?, ?)`,
      [data.userId, data.firstName, data.lastName],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },

  getUserById: (id, callback) => {
    dbConfig.query(
      `SELECT registration.user_id,user_name,user_email,first_name,last_name FROM registration LEFT JOIN profile ON registration.user_id = profile.user_id WHERE registration.user_id = ?`,
      [id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result[0]);
      }
    );
  },

  getUserByEmail: (email, callback) => {
    dbConfig.query(
      `SELECT * FROM registration WHERE user_email = ?`,
      [email],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result[0]);
      }
    );
  },

  getAllUsers: (callback) => {
    dbConfig.query(
      `SELECT user_id, user_name, user_email FROM registration`,
      [],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
