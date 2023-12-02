const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");
const mysql2 = require("mysql2");

let app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.listen(port, (req, res) => {
  console.log(`Servidor rodando na porta: ${port}`);
});
