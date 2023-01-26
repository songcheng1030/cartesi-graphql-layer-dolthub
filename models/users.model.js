const sql = require("./db.js");

// constructor
const Users = function(users) {
  this.title = users.title;
  this.description = users.description;
  this.published = users.published;
};

Users.getAll = (where, result) => {
  let query = "SELECT * FROM users";
  
  if (where) {
    query += ` ${where}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      result(err);
      return;
    }
    result(res);
  });
};

Users.getUser = (where, result) => {
  let query = "SELECT * FROM users";
  
  if (where) {
    query += ` ${where}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      result(err);
      return;
    }
    result(res);
  });
};

Users.getAllCount = (result) => {
  let query = "SELECT count(*) FROM users";

  sql.query(query, (err, res) => {
    if (err) {
      result(err);
      return;
    }
    result(res);
  });
};

module.exports = Users;
