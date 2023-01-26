const sql = require("./db.js");

// constructor
const Blocks = function(blocks) {
  this.title = blocks.title;
  this.description = blocks.description;
  this.published = blocks.published;
};

Blocks.getAll = (where, result) => {
  let query = "SELECT * FROM blocks";
  
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

Blocks.getBlock = (where, result) => {
  let query = "SELECT * FROM blocks";
  
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

Blocks.getAllCount = (result) => {
  let query = "SELECT count(*) FROM blocks";

  sql.query(query, (err, res) => {
    if (err) {
      result(err);
      return;
    }
    result(res);
  });
};

module.exports = Blocks;
