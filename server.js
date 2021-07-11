const express = require("express");
const logger = require("morgan");
const db = require("./models");
const connectDB = require('./connectionDB')

const PORT = process.env.PORT || 3000;
const app = express();
connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger('dev'))
app.use(require('./controller/html-routes'))
app.use(require('./controller/api-routes'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
