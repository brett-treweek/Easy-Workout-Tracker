const app = require("express").Router();
const path = require("path");

// Render Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

// Render Stats Page
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
});

// Render Exersises Form
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

module.exports = app;
