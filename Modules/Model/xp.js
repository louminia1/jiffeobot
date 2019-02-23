const mongoose = require("mongoose");

const xpSchema = mongoose.Schema({
    userID: String,
    xp_count: Number,
    level_count: Number,
})

module.exports = mongoose.model("xp", xpSchema);