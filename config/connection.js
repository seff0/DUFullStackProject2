const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: " YOUR PASSWORD HERE ",
  database: "destinations_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as ID: ${connection.threadId}`);
});

module.exports = connection;
