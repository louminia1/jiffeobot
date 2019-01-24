const mongoose = require("mongoose");

const SPchema = mongoose.Schema({
    UserStaff: String,
    UserStaffID: String,
    serveurName: String,
    serveurID: String,
    spusername: String,
    spuserID: String,
    Raison: String
})

module.exports = mongoose.model("SP", SPchema);