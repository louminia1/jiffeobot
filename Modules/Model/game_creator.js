const mongoose = require("mongoose");

const GCchema = mongoose.Schema({
    User: String,
    ID: Number,
    Code: String,
    inviter: Number
})

module.exports = mongoose.model("Gcreator", GCchema);