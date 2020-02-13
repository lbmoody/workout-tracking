const router = require("express").Router();
const { Workout } = require("../models");

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(401).json(err))
});

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    Workout.findByIdAndUpdate(req.params.id, {$push: req.body}, { new: true })
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

module.exports = router;