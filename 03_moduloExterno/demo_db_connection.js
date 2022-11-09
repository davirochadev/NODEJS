var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "D@vi13032014",
  database: "db_senai"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query('SELECT * FROM ANIMAL', (erro, linhas) => {
    if (erro) throw erro;

    console.log('Animais: ', linhas, '\n\n')
});