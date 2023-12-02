/* Entrypoint do nosso back, ele que relacionará toda nossa aplicação com o servidor do node.js */

const express = require("express"); /* Framework mais utilizado com node.js */

const bodyParser = require("body-parser"); /* Parsear nossas requisições POST e JSON */

const cors = require("cors");
const mysql2 = require("mysql2");

let app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false })); /* Lidar com method POST */

app.use(bodyParser.json()); /* Trabalhar com requisições JSON */

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.listen(port, (req, res) => {
  console.log(`Servidor rodando na porta: ${port}`);
});
