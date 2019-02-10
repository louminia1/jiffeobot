const mongoose = require("mongoose");

const GCchema = mongoose.Schema({
    User: String,
    ID: String,
    Code: String,
    inviter: Number,
    Point: Number
})

module.exports = mongoose.model("Games", GCchema);