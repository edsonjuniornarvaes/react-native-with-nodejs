const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

let app = express();

app.use(cors());

// Trabalhar com requisições POST
app.use(bodyParser.urlencoded({ extended: false }));

// Trabalhar com requisições JSON
app.use(bodyParser.json());
