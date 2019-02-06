const mongoose = require("mongoose");

const MoneySchema = mongoose.Schema({
    userID: String,
    piece: Number,
})

module.exports = mongoose.model("Money", MoneySchema);