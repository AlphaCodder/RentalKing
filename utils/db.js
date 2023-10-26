const mongoose = require('mongoose');
const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log("MongoDB connected");

    } catch (err) {
        console.log("MongoDB Error : Failed to connect");
        console.log(err);
        // process.exit(1);
    }
}

module.exports = db;