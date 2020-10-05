const mongoose = require("mongoose");

const todayNoticeSchema = mongoose.Schema({
    content: {
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

const todayNoticeModel = mongoose.model("TodayNotice", todayNoticeSchema);

module.exports = todayNoticeModel;