const mongoose = require("mongoose");

const homeworkSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    student_id: {
        type: Schema.ObjectId, ref: 'Student'
    },
    group_id: {
        type: Schema.ObjectId, ref: 'HomeworkGroup'
    },
    title: {
        type: String,
        require: true
    },
    score: {
        type: Number
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

const homeworkModel = mongoose.model("Homework", homeworkSchema);

module.exports = homeworkModel;