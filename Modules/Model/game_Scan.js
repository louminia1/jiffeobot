const mongoose = require("mongoose");

const GCschema = mongoose.Schema({
    User: String,
    ID: String,
    Code: String,

})

module.exports = mongoose.model("Games_scan", GCschema);