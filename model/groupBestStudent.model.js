const mongoose = require("mongoose");

const groupBestStudentSchema = mongoose.Schema({
    group_id: {
        type: String,
        require: true
    },
    student_id: {
        type: String,
        require: true
    },
    times: {
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

const groupBestStudentModel = mongoose.model("GroupBestStudent", groupBestStudentSchema);

module.exports = groupBestStudentModel;