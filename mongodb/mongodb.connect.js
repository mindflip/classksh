const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL
        )
    } catch(err) {
        console.log("Error connecting to mongodb");
        console.log(err);
    }
}

module.exports = { connect };