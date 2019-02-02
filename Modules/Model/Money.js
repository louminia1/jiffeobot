const mongoose = require("mongoose");

const MoneySchema = mongoose.Schema({
    userID: String,
    coins: Number,
    lvl: Number,
    xp: Number
})

module.exports = mongoose.model("Money", MoneySchema);