const mysql = require("mysql");
const dbConfig = require("../service/config/db.config");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  bigNumberStrings: true,
  supportBigNumbers: true
});

module.exports = connection;
