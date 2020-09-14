const mongoose = require("mongoose");

const homeworkGroupSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
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

const homeworkGroupModel = mongoose.model("HomeworkGroup", homeworkGroupSchema);

module.exports = homeworkGroupModel;