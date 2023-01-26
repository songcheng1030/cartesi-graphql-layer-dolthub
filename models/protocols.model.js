const sql = require("./db.js");

// constructor
const Protocols = function(protocols) {
  this.title = protocols.title;
  this.description = protocols.description;
  this.published = protocols.published;
};

Protocols.getAll = (where, result) => {
  let query = "SELECT * FROM protocols";
  
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

Protocols.getProtocol = (where, result) => {
  let query = "SELECT * FROM protocols";
  
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

Protocols.getAllCount = (result) => {
  let query = "SELECT count(*) FROM protocols";

  sql.query(query, (err, res) => {
    if (err) {
      result(err);
      return;
    }
    result(res);
  });
};

module.exports = Protocols;
