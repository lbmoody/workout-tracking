const { Workout } = require("./models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find()
            .then(data => res.status(200).json(data))
            .catch(err => res.status(401).json(err))
    });

    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, {$push: req.body}, { new: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    });
}