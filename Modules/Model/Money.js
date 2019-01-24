const mongoose = require("mongoose");

const MoneySchema = mongoose.Schema({
    userID: String,
    coins: Number
})

module.exports = mongoose.model("Money", MoneySchema);