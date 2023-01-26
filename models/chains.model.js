const sql = require("./db.js");

// constructor
const Chains = function(chains) {
  this.title = chains.title;
  this.description = chains.description;
  this.published = chains.published;
};

Chains.getAll = (where, result) => {
  let query = "SELECT * FROM chains";
  
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

Chains.getChain = (where, result) => {
  let query = "SELECT * FROM chains";
  
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

Chains.getAllCount = (result) => {
  let query = "SELECT count(*) FROM chains";

  sql.query(query, (err, res) => {
    if (err) {
      result(err);
      return;
    }
    result(res);
  });
};

module.exports = Chains;
