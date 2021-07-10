const app = require("express").Router();
const db = require("../models");

app.get("/api/workouts", (req, res) => {
  db.Workout.find().then((data) => {
    res.json(data);
  });
});

app.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  ).then((data) => {
    res.json(data);
  });
});

app.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((data) => {
    res.json(data);
  });
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ]).then((data) => {
    res.json(data);
  });
});

module.exports = app;
