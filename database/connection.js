const mysql = require("mysql2");
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3305',
    user: 'root',
    database: 'mytask',

});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados!");
});

module.exports = connection

