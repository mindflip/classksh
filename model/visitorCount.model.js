const mongoose = require("mongoose");

const visitorCountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalCount: {
        type: Number,
        required: true
    },
    todayCount: {
        type: Number,
    },
    date: {
        type: String,
    }
});

const visitorCountModel = mongoose.model("VisitorCount", visitorCountSchema);

module.exports = visitorCountModel;