const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

let app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
