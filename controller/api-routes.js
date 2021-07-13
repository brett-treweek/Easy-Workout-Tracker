const app = require("express").Router();
const db = require("../models");

//Get Homepage Data including totalDuration  
app.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ]).then((data) => {
    res.json(data);
  }).catch((err) => res.status(500).json(err)) 
});

// Continue Workout
app.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  ).then((data) => {
    res.json(data);
  }).catch((err) => res.status(500).json(err))
});

// New Workout
app.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((data) => {
    res.json(data);
  }).catch((err) => res.status(500).json(err))
});

// Get Stats for Dashboard including totalDuration
app.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ]).then((data) => {
    res.json(data);
  }).catch((err) => res.status(500).json(err))
});

module.exports = app;
