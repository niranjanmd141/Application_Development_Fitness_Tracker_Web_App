const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Cardio', 'Strength', 'Yoga', 'Other'] // Example types
    },
    duration: {
        type: Number, // in minutes
        required: true
    },
    date: {
        type: Date,
        default: Date.now // Automatically sets the current date
    },
    notes: {
        type: String,
        trim: true // Removes leading/trailing whitespace
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('Workout', workoutSchema);