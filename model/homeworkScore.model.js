const mongoose = require("mongoose");

const homeworkScoreSchema = mongoose.Schema({
    homework_id: {
        type: String,
        required: true
    },
    student_id: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    }
});

const homeworkScoreModel = mongoose.model("HomeworkScore", homeworkScoreSchema);

module.exports = homeworkScoreModel;