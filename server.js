const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./models");


mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger('dev'))
app.use(require('./controller/html-routes'))
app.use(require('./controller/api-routes'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
