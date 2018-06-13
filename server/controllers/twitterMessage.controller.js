const mysql = require('mysql');
const config = require('../config/config');
const connection = mysql.createConnection(config.DB);

exports.findAll = (req, res) => {

  connection.connect();

  connection.query('SELECT * FROM `tweet` ', (error, results, fields) => {
    if (error) {
      throw error;
    };
    res.send(results);
  });

  connection.end();

};
