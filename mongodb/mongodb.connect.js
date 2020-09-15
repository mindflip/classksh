const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
    } catch(err) {
        console.log("Error connecting to mongodb");
        console.log(err);
    }
}

module.exports = { connect };