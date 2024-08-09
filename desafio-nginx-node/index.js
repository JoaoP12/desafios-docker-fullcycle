const express = require("express");

const app = express();
const port = 3000;

const config = {
  host: "mysql",
  user: "root",
  password: "jp123",
  database: "challenge",
};

const mysql = require("mysql2");
const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  const insertSQL = `INSERT INTO people(name) VALUES('JP');`;
  connection.query(insertSQL, function () {});
  connection.query(`SELECT name FROM people;`, function (err, results) {
    if (results) {
      const names = results.map((result) => result.name).join("<br />- ");
      res.send(`<h1>Full Cycle Rocks!</h1><br />- ${names}`);
    }
  });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
