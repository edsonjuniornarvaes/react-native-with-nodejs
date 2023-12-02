/* Entrypoint do nosso back, ele que relacionará toda nossa aplicação com o servidor do node.js */

/* Framework mais utilizado com node.js */
const express = require("express");

/* Parsear nossas requisições POST e JSON */
const bodyParser = require("body-parser");

const cors = require("cors");
const mysql = require("mysql");

let app = express();

app.use(cors());

/* Trabalhar com requisições POST */
app.use(bodyParser.urlencoded({ extended: false }));

/* Trabalhar com requisições JSON */
app.use(bodyParser.json());

let port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log("Servidor rodando");
});
