/* Entrypoint do nosso back, ele que relacionará toda nossa aplicação com o servidor do node.js */

const express = require("express"); /* Framework mais utilizado com node.js */

const bodyParser = require("body-parser"); /* Parsear nossas requisições POST e JSON */

const cors = require("cors");
const mysql2 = require("mysql2");

let app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({ extended: false })
); /* Trabalhar com requisições POST */

app.use(bodyParser.json()); /* Trabalhar com requisições JSON */

let port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log("Servidor rodando");
});
