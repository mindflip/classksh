const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    number: {
        type: Number,
        require: true
    },
    name: {
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
})