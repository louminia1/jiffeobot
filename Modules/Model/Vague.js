const mongoose = require("mongoose");

const vaguechema = mongoose.Schema({
    userID: String,
    vague: String
})

module.exports = mongoose.model("infoMP", vaguechema);