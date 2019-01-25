const mongoose = require("mongoose");

const configSchema = mongoose.Schema({
    bot_name: String,
    bot_ID: String,
    bot_Prefix: String,
    bot_Log: String,
    bot_Error: String,
    bot_Info: String,
    bot_Pack: String
})

module.exports = mongoose.model("CFS", configSchema);