const app = require("express").Router();
const path = require("path");

// Render Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html")).catch((err) => res.status(500).json(err))
});

// Render Stats Page
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html")).catch((err) => res.status(500).json(err))
});

// Render Exersises Form
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html")).catch((err) => res.status(500).json(err))
});

module.exports = app;
