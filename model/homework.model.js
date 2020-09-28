const mongoose = require("mongoose");

const homeworkSchema = mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    group_id: {
        //type: mongoose.Schema.ObjectId, ref: 'HomeworkGroup'
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true
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