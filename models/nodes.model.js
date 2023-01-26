const sql = require("./db.js");

// constructor
const Nodes = function(nodes) {
  this.title = nodes.title;
  this.description = nodes.description;
  this.published = nodes.published;
};

Nodes.getAll = (where, result) => {
  let query = "SELECT * FROM nodes";
  
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

Nodes.getAllCount = (result) => {
  let query = "SELECT count(*) FROM nodes";

  sql.query(query, (err, res) => {
    if (err) {
      result(err);
      return;
    }
    result(res);
  });
};

module.exports = Nodes;
