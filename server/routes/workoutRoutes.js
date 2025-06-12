const express = require('express');
const router = express.Router(); // Create a new router instance
const Workout = require('../models/Workout'); // Import your Workout model

// @route   GET /api/workouts
// @desc    Get all workouts
// @access  Public (for now)
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find().sort({ date: -1 }); // Get all workouts, sorted by date descending
        res.json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/workouts
// @desc    Add a new workout
// @access  Public (for now)
router.post('/', async (req, res) => {
    const { type, duration, notes } = req.body; // Destructure data from request body

    // Basic validation
    if (!type || !duration) {
        return res.status(400).json({ message: 'Please enter all required fields: type and duration' });
    }

    const newWorkout = new Workout({
        type,
        duration,
        notes
    });

    try {
        const savedWorkout = await newWorkout.save();
        res.status(201).json(savedWorkout); // 201 Created
    } catch (err) {
        res.status(400).json({ message: err.message }); // 400 Bad Request if validation fails
    }
});

// @route   DELETE /api/workouts/:id
// @desc    Delete a workout
// @access  Public (for now)
router.delete('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        await Workout.deleteOne({ _id: req.params.id }); // Mongoose 6+ uses deleteOne or deleteMany
        res.json({ message: 'Workout removed' });
    } catch (err) {
        // Check if the ID format is invalid (e.g., not a valid MongoDB ObjectId)
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid Workout ID' });
        }
        res.status(500).json({ message: err.message });
    }
});

// You can add PUT/PATCH for updating workouts later if needed

module.exports = router; // Export the router