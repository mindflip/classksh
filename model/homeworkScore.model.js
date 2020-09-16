const mongoose = require("mongoose");

const homeworkScoreSchema = mongoose.Schema({
    homework_id: {
        type: Number,
        required: true
    },
    student_id: {
        type: Number,
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