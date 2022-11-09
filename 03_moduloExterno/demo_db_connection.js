var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "D@vi1303"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});